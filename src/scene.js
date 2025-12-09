import * as THREE from 'three';

export class SaturnScene {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.container.appendChild(this.renderer.domElement);

    this.camera.position.z = 15;
    this.targetZoom = 15;

    this.initLights();
    this.initSaturn();
    this.initRings();
    this.initStars();

    window.addEventListener('resize', this.onWindowResize.bind(this));
    this.animate();
  }

  initLights() {
    // Increase ambient light brightness significantly
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    // Main sun light
    const sunLight = new THREE.PointLight(0xffffff, 2.5, 0); // 0 distance = infinite range
    sunLight.position.set(50, 30, 50);
    this.scene.add(sunLight);

    // Add a fill light from the opposite side to prevent pitch black shadows
    const fillLight = new THREE.DirectionalLight(0xccccff, 0.5);
    fillLight.position.set(-20, 0, 20);
    this.scene.add(fillLight);
  }

  createMoonTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const context = canvas.getContext('2d');

    // Base Moon color (Greyish)
    context.fillStyle = '#cccccc'; 
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Add Noise
    for (let i = 0; i < 50000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const gray = Math.random() * 50 + 150;
      context.fillStyle = `rgb(${gray}, ${gray}, ${gray})`;
      context.fillRect(x, y, 2, 2);
    }

    // Draw Craters
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 20 + 5;
      
      // Crater shadow
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fillStyle = 'rgba(0, 0, 0, 0.2)';
      context.fill();

      // Crater highlight (offset)
      context.beginPath();
      context.arc(x - 2, y - 2, radius * 0.9, 0, Math.PI * 2);
      context.fillStyle = 'rgba(255, 255, 255, 0.1)';
      context.fill();
    }
    
    return new THREE.CanvasTexture(canvas);
  }

  initSaturn() {
    const geometry = new THREE.SphereGeometry(5, 64, 64);
    
    const texture = this.createMoonTexture();
    
    // Use MeshStandardMaterial for better lighting on craters
    const material = new THREE.MeshStandardMaterial({ 
      map: texture,
      color: 0xffffff, 
      roughness: 0.8, // Moon is rough
      metalness: 0.0
    });
    this.saturn = new THREE.Mesh(geometry, material);
    this.scene.add(this.saturn);
  }

  initRings() {
    // Create a particle system for the rings
    const particleCount = 40000; // More particles for brilliance
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const innerRadius = 7;
    const outerRadius = 14; // Slightly wider
    
    // Brilliant colors
    const color1 = new THREE.Color(0xffffff); // White
    const color2 = new THREE.Color(0x88ccff); // Light Blue
    const color3 = new THREE.Color(0xffdd88); // Gold

    for (let i = 0; i < particleCount; i++) {
      // Random angle
      const angle = Math.random() * Math.PI * 2;
      // Random radius with distribution to make it look like bands
      const radius = innerRadius + Math.random() * (outerRadius - innerRadius);
      
      // Spread slightly in Y to give volume
      const spread = 0.15;
      const x = Math.cos(angle) * radius;
      const y = (Math.random() - 0.5) * spread;
      const z = Math.sin(angle) * radius;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Randomly pick one of the brilliant colors
      const rand = Math.random();
      let color;
      if (rand < 0.6) color = color1;
      else if (rand < 0.8) color = color2;
      else color = color3;
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.08, // Slightly larger
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false // Helps with transparency
    });

    this.rings = new THREE.Points(geometry, material);
    
    // Create a group to handle the tilt, so we can spin the rings around their own axis
    this.ringsGroup = new THREE.Group();
    this.ringsGroup.add(this.rings);

    // Tilt the group
    this.ringsGroup.rotation.x = Math.PI / 6; 
    this.ringsGroup.rotation.z = Math.PI / 12;
    
    this.scene.add(this.ringsGroup);
  }

  initStars() {
    const particleCount = 5000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 200;
      const z = (Math.random() - 0.5) * 200;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1, transparent: true, opacity: 0.5 });
    this.stars = new THREE.Points(geometry, material);
    this.scene.add(this.stars);
  }

  setZoom(factor) {
    // Factor 0 (far) to 1 (close)
    // Map to Z position: Far = 30, Close = 8
    const minZ = 8;
    const maxZ = 30;
    this.targetZoom = maxZ - (factor * (maxZ - minZ));
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    // Rotate Saturn
    if (this.saturn) {
      this.saturn.rotation.y += 0.01; // Faster rotation
    }

    // Rotate Rings
    if (this.rings) {
      this.rings.rotation.y -= 0.003; // Spin the rings around their local Y axis
    }

    // Smooth zoom
    this.camera.position.z += (this.targetZoom - this.camera.position.z) * 0.05;

    this.renderer.render(this.scene, this.camera);
  }
}
