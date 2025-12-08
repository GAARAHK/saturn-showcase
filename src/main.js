import './style.css'
import { SaturnScene } from './scene.js';
import { HandController } from './hand-tracking.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the 3D Scene
  const saturnScene = new SaturnScene('canvas-container');

  // Initialize Hand Tracking
  const videoElement = document.getElementById('webcam');
  
  const handController = new HandController(videoElement, (zoomLevel) => {
    // zoomLevel is 0 to 1
    // We can map this to the scene's zoom function
    saturnScene.setZoom(zoomLevel);
  });
});
