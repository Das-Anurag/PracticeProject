import * as THREE from "https://unpkg.com/three@0.179.1/build/three.module.js";

// Create the Scene
const scene = new THREE.Scene();

// Create the Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// Create the Renderer
const renderer = new THREE.WebGLRenderer();

// Set canvas size
renderer.setSize(400, 300);

// Set background color (Red)
renderer.setClearColor(0xff0000);

// Add the canvas to the webpage
document.body.appendChild(renderer.domElement);

// Create the cube shape
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create the cube material (Green)
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});

// Combine geometry and material into a cube
const cube = new THREE.Mesh(geometry, material);

// Add the cube to the scene
scene.add(cube);

// Move the camera back so the cube is visible
camera.position.z = 5;

// Draw the scene
renderer.render(scene, camera);
