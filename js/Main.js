alert("1");
import * as THREE from "https://unpkg.com/three@0.179.1/build/three.module.js";
alert("2");
const scene = new THREE.Scene();
alert("3");
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
alert("4");
const renderer = new THREE.WebGLRenderer();
alert("5");
renderer.setSize(400, 300);
alert("6");
renderer.setClearColor(0xff0000);
alert("7");
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);
alert("8");
