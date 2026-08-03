
import * as THREE from "https://unpkg.com/three@0.179.1/build/three.module.js";f
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
const renderer = new THREE.WebGLRenderer();
const geometry = new THREE.BoxGeometry(1, 1, 1);
renderer.setSize(400, 300);
renderer.setClearColor(0xff0000);
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);
