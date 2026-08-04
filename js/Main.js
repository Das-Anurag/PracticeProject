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
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x87CEEB);
document.body.style.margin = "0";
document.body.appendChild(renderer.domElement);

// Create one geometry (shared by all cubes)
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create three different materials
const material1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const material3 = new THREE.MeshBasicMaterial({ color: 0x0000ff });

// Create three cubes
const cube1 = new THREE.Mesh(geometry, material1);
const cube2 = new THREE.Mesh(geometry, material2);
const cube3 = new THREE.Mesh(geometry, material3);

// Set their positions
cube1.position.x = -2;
cube2.position.x = 0;
cube3.position.x = 2;

// Add them to the scene
scene.add(cube1);
scene.add(cube2);
scene.add(cube3);

// Move the camera back
camera.position.z = 5;

// Animation Loop
function animate() {

    requestAnimationFrame(animate);

    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;

    cube2.rotation.x += 0.02;
    cube2.rotation.y += 0.02;

    cube3.rotation.x += 0.03;
    cube3.rotation.y += 0.03;

    renderer.render(scene, camera);
}

animate();
