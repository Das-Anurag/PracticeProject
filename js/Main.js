import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// Create the Scene
const scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(20);
scene.add(axesHelper);
const light = new THREE.DirectionalLight(0xffffff, 0.5);

light.position.set(5, 5, 5);

scene.add(light);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

scene.add(ambientLight);
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

//const cubes = [];

//for (let layer = 0; layer < 1; layer++) {
    //for (let row = 0; row < 1; row++) {
      //  for (let col = 0; col < 1; col++) {

            //const material = new THREE.MeshPhongMaterial({
// color: new THREE.Color(
       // col / 2,
      //  row / 2,
       // layer / 2
    //),
 //   wireframe: false
//});

//const cube = new THREE.Mesh(geometry, material);

         //   cube.position.x = (col - 1) * 2;
         //   cube.position.y = (1 - row) * 2;
          //  cube.position.z = (layer - 1) * 2;

        //    scene.add(cube);

         //   cubes.push(cube);

     //   }

 //   }

//}
const direction = new THREE.Vector3(1, 1, 0).normalize();

const origin = new THREE.Vector3(0, 0, 0);

const length = 5;

const color = 0xff0000;

const arrow = new THREE.ArrowHelper(
    direction,
    origin,
    length,
    color
);

scene.add(arrow);
// Move the camera back
camera.position.set(10, 11, 12);
camera.lookAt(0, 0, 0);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
// Animation Loop
function animate() {

    requestAnimationFrame(animate);

    arrow.rotation.y += 0.01;

    controls.update();

    renderer.render(scene, camera);

}

animate();
