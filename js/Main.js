import * as THREE from "https://unpkg.com/three@0.179.1/build/three.module.js";

// Create the Scene
const scene = new THREE.Scene();

// Create the Camera
const camera = new THREE.PerspectiveCamera(
    120,
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
const material1 = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});
const cubes = [];

for (let layer = 0; layer < 3; layer++) {

    for (let row = 0; row < 3; row++) {

        for (let col = 0; col < 3; col++) {

            const material = new THREE.MeshBasicMaterial({
    color: new THREE.Color(
        col / 2,
        row / 2,
        layer / 2
    )
});

const cube = new THREE.Mesh(geometry, material);

            cube.position.x = (col - 1) * 2;
            cube.position.y = (1 - row) * 2;
            cube.position.z = (layer - 1) * 2;

            scene.add(cube);

            cubes.push(cube);

        }

    }

}
// Move the camera back
camera.position.set(10, 11, 12);
camera.lookAt(0, 0, 0);

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
