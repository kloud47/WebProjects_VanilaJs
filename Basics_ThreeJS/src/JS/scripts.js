import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";

const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true;

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();// creating a Scene:

const camera = new THREE.PerspectiveCamera(// type of camera
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const Orbit = new OrbitControls(camera, renderer.domElement);

const axisHelper = new THREE.AxesHelper(3);
scene.add(axisHelper);

camera.position.set(-10, 30, 30)
Orbit.update();
//--------------------------------------------------------------------------------
// Geometry =>
const boxGeom = new THREE.BoxGeometry();
// Material =>
const boxMaterial = new THREE.MeshStandardMaterial({color: 0x00FF00});
// Combine above =>
const box = new THREE.Mesh(boxGeom, boxMaterial);
//--------------------------------------------------------------------------------
scene.add(box);

const planeGeo = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshStandardMaterial({
    color: 0x0ffffff,
    side: THREE.DoubleSide
});
const plane = new THREE.Mesh(planeGeo, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;
plane.receiveShadow = true;

const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);

const sphereGeo = new THREE.SphereGeometry(4);
const SphereMaterial = new THREE.MeshStandardMaterial({
    color: 0x0000ff,
    wireframe: false
});
const sphere = new THREE.Mesh(sphereGeo, SphereMaterial);
scene.add(sphere);
sphere.position.set(-10, 10, 0);
sphere.castShadow = true;


// Adding Light =>---------------------------------------------------------
const ambientLight = new THREE.AmbientLight(0x33333333);
scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0xFFFFFFF, 0.8);
// scene.add(directionalLight);
// directionalLight.position.set(-30, 50, 0);
// directionalLight.castShadow = true;
// directionalLight.shadow.camera.bottom = -12;

// const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
// scene.add(directionalLightHelper);

// const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
// scene.add(dLightShadowHelper);

const spotLight = new THREE.SpotLight(0xFFFFFF, 50000);
scene.add(spotLight);
spotLight.position.set(-100, 100, 0);
spotLight.castShadow = true;
spotLight.angle = 0.2;

const SLhelper = new THREE.SpotLightHelper(spotLight);
scene.add(SLhelper);

// scene.fog = new THREE.Fog(0xFFFFFF, 0, 200);
scene.fog = new THREE.FogExp2(0xFFFFFFF, 0.01);

/// setting background texture =>---------------------------------------
renderer.setClearColor(0xFFEA00);

// const textureLoader = new THREE.TextureLoader();// to load The texture: 1 face(1D)
// // scene.background = textureLoader.load(image);
// const cubeTextureLoader = new THREE.CubeTextureLoader();// 3D cube texture Loader:
// scene.background = textureLoader.load({
//     face1,
//     face2,
//     face3,
//     face4,
//     face5,
//     face6
// });


/// DATA ENTRY =>------------------------------------------------
const gui = new dat.GUI();
const options = {
    sphereColor: "#ffea00",
    wireframe: false,
    speed: 0.01,
    angle: 0.2,
    penumbra: 0,
    intensity: 1
}
gui.addColor(options, "sphereColor").onChange(function(e) {
    sphere.material.color.set(e);
});
gui.add(options, "wireframe").onChange((e) => {
    sphere.material.wireframe = e;
});
gui.add(options, "speed", 0, 0.1);
gui.add(options, "angle", 0, 1);
gui.add(options, "intensity", 0, 50000);
gui.add(options, "penumbra", 0, 1);
//---------------------------------------------------------------

let step = 0;

function animate (time) {
    box.rotation.x  = time / 1000;
    box.rotation.y  = time / 1000;

    step += options.speed;
    sphere.position.y = 10 * Math.abs(Math.sin(step)) + 2.5 ;

    spotLight.angle = options.angle;
    spotLight.penumbra = options.penumbra;
    spotLight.intensity = options.intensity;
    SLhelper.update();

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})