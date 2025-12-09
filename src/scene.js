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

    // 1. Realistic Base Grey
    context.fillStyle = '#b0b0b0'; 
    context.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Generate "Maria" (Dark Seas) - Large irregular dark patches
    for (let i = 0; i < 40; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const r = Math.random() * 150 + 50;
        
        // Use distorted circles for irregularity
        context.save();
        context.translate(x, y);
        context.scale(1 + Math.random(), 1 + Math.random());
        context.beginPath();
        context.arc(0, 0, r, 0, Math.PI * 2);
        context.restore();

        context.fillStyle = 'rgba(60, 60, 65, 0.15)'; // Dark grey, low opacity
        context.fill();
    }

    // 3. Surface Noise (Dust/Regolith)
    for (let i = 0; i < 100000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const shade = Math.random() > 0.5 ? 200 : 100;
      context.fillStyle = `rgba(${shade}, ${shade}, ${shade}, 0.1)`;
      context.fillRect(x, y, 2, 2);
    }

    // 4. Craters (Realistic shadows)
    for (let i = 0; i < 400; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const r = Math.random() * 8 + 1;
      
      // Shadow (Dark side)
      context.beginPath();
      context.arc(x + r*0.2, y + r*0.2, r, 0, Math.PI * 2);
      context.fillStyle = 'rgba(30, 30, 30, 0.6)';
      context.fill();

      // Highlight (Light side)
      context.beginPath();
      context.arc(x - r*0.2, y - r*0.2, r, 0, Math.PI * 2);
      context.fillStyle = 'rgba(200, 200, 200, 0.4)';
      context.fill();

      // Crater floor (Grey)
      context.beginPath();
      context.arc(x, y, r * 0.9, 0, Math.PI * 2);
      context.fillStyle = 'rgba(140, 140, 140, 0.8)';
      context.fill();
    }
    
    return new THREE.CanvasTexture(canvas);
  }

  initSaturn() {
    const geometry = new THREE.SphereGeometry(5, 64, 64);
    
    const texture = this.createMoonTexture();
    
    // Realistic Photo Look: Matte, rocky, no self-emission
    const material = new THREE.MeshStandardMaterial({ 
      map: texture,
      color: 0xffffff, 
      roughness: 0.9, // Very rough surface (rock/dust)
      metalness: 0.0, // Not metallic
      emissive: 0x000000, // No self-emission
      emissiveIntensity: 0
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
      this.saturn.rotation.y += 0.001; // Slow, realistic rotation
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
