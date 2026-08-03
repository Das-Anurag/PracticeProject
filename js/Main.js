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
renderer.setSize(400, 300);
renderer.setClearColor(0xff0000);
document.body.style.margin = "0";
document.body.appendChild(renderer.domElement);

// Create the Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});
const cube = new THREE.Mesh(geometry, material);

// Move the cube
cube.position.x = 3;
cube.position.y = 3;
cube.position.z = -1;

// Add the cube to the scene
scene.add(cube);

// Move the camera back
camera.position.z = 5;

// Animation Loop
function animate() {

    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);

}

animate();
