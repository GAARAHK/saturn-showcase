import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision';

export class HandController {
  constructor(videoElement, onZoomChange) {
    this.video = videoElement;
    this.onZoomChange = onZoomChange;
    this.lastVideoTime = -1;
    this.results = undefined;
    this.handLandmarker = undefined;
    this.runningMode = "VIDEO";
    
    // Smoothing
    this.lastDistance = 0;
    this.alpha = 0.2; // Low pass filter alpha

    this.init();
  }


  async init() {
    try {
      // Use Vite's BASE_URL to construct correct paths for both Dev and Prod
      // import.meta.env.BASE_URL will be '/saturn-showcase/' in prod and dev
      const baseUrl = import.meta.env.BASE_URL;
      
      // Remove trailing slash if present to avoid double slashes
      const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
      
      const wasmPath = `${cleanBase}/wasm`;
      const modelPath = `${cleanBase}/models/hand_landmarker.task`;

      console.log(`Loading WASM from: ${wasmPath}`);
      console.log(`Loading Model from: ${modelPath}`);

      const vision = await FilesetResolver.forVisionTasks(wasmPath);
      
      this.handLandmarker = await HandLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: modelPath,
          delegate: "GPU"
        },
        runningMode: this.runningMode,
        numHands: 1
      });

      this.startWebcam();
    } catch (error) {
      console.error("Error initializing hand landmarker:", error);
      const loading = document.getElementById('loading');
      if(loading) {
        loading.innerText = `Error: ${error.message}\nCheck if files exist in /public/models and /public/wasm`;
        loading.style.color = "#ff4444";
        loading.style.textAlign = "center";
      }
    }
  }

  async startWebcam() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.warn("Browser API navigator.mediaDevices.getUserMedia not available");
      const loading = document.getElementById('loading');
      if(loading) loading.innerText = "Error: Webcam API not supported.";
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: 320,
          height: 240
        }
      });
      this.video.srcObject = stream;
      this.video.addEventListener("loadeddata", this.predictWebcam.bind(this));
      
      // Hide loading text
      const loading = document.getElementById('loading');
      if(loading) loading.style.display = 'none';

    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  }

  async predictWebcam() {
    // Resize the video to match the stream size if needed, but CSS handles display size
    if (this.handLandmarker && this.video.currentTime !== this.lastVideoTime) {
      this.lastVideoTime = this.video.currentTime;
      const startTimeMs = performance.now();
      
      this.results = this.handLandmarker.detectForVideo(this.video, startTimeMs);

      if (this.results.landmarks && this.results.landmarks.length > 0) {
        const landmarks = this.results.landmarks[0];
        
        // Calculate distance between Thumb Tip (4) and Index Finger Tip (8)
        const thumbTip = landmarks[4];
        const indexTip = landmarks[8];
        
        // Simple Euclidean distance in 2D (ignoring Z for simplicity of interaction)
        const distance = Math.sqrt(
          Math.pow(thumbTip.x - indexTip.x, 2) + 
          Math.pow(thumbTip.y - indexTip.y, 2)
        );

        // Normalize distance. 
        // Typically, a pinch is ~0.02, wide open is ~0.2 or more depending on hand distance to camera.
        // Let's clamp and map it.
        const minD = 0.02;
        const maxD = 0.25;
        const clampedD = Math.max(minD, Math.min(maxD, distance));
        const normalized = (clampedD - minD) / (maxD - minD);

        // Smooth the value
        this.lastDistance = this.lastDistance + this.alpha * (normalized - this.lastDistance);
        
        this.onZoomChange(this.lastDistance);
      }
    }

    window.requestAnimationFrame(this.predictWebcam.bind(this));
  }
}
