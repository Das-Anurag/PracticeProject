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

const cubes = [];

for (let i = 0; i < 3; i++) {

    const cube = new THREE.Mesh(geometry, material1);

    cube.position.x = (i - 1) * 2;

    scene.add(cube);

    cubes.push(cube);

}

// Move the camera back
camera.position.z = 5;

// Animation Loop
function animate() {

    requestAnimationFrame(animate);

    for (let i = 0; i < cubes.length; i++) {

    cubes[i].rotation.x += 0.01 * (i + 1);
    cubes[i].rotation.y += 0.01 * (i + 1);

    }

    renderer.render(scene, camera);
}

animate();
