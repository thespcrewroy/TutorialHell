/* Import Necessary Libraries */
import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";
import spline from "./spline.js";
import { EffectComposer } from "jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "jsm/postprocessing/UnrealBloomPass.js";

const fov = 75; // set the field of view to 75 degrees
const w = window.innerWidth; // width
const h = window.innerHeight; // height
const aspect = w / h; // set the aspect ratio to the window width divided by the window height
const near = 0.1; // set the near clipping plane to 0.1
const far = 1000; // set the far clipping plane to 10
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far); // create a new PerspectiveCamera
camera.position.z = 5; // set the z position of the camera to 5

/* Create a new WebGLRenderer with the following parameters: */
const renderer = new THREE.WebGLRenderer(); // create a new WebGLRenderer
renderer.setSize(w, h); // set the size of the renderer to the window width and height
renderer.toneMapping = THREE.ACESFilmicToneMapping; // set the tone mapping to ACESFilmicToneMapping
renderer.outputColorSpace = THREE.SRGBColorSpace; // set the output color space to SRGBColorSpace
document.body.appendChild(renderer.domElement); // append the renderer to the body

/* Create a new OrbitControls with the following parameters: */
const controls = new OrbitControls(camera, renderer.domElement); // create new OrbitControls
controls.enableDamping = true; // enable damping
controls.dampingFactor = 0.03; // set the damping factor to 0.03

const scene = new THREE.Scene(); // create a new Scene

/* Add Fog to the Scene */
const color = new THREE.Color(0x000000); // set the color of the fog to black
const density = 0.3; // set the density of the fog to 0.3
scene.fog = new THREE.FogExp2(color, density); // add fog to the scene

/* Post-processing */
const renderScene = new RenderPass(scene, camera); // create a new RenderPass
const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 1.5, 0.4, 100); // create a new UnrealBloomPass
bloomPass.threshold = 0.002; // set the threshold of the bloom pass to 0.002
bloomPass.strength = 3.5; // set the strength of the bloom pass to 3.5
bloomPass.radius = 0; // set the radius of the bloom pass to 0
const composer = new EffectComposer(renderer); // create a new EffectComposer
composer.addPass(renderScene); // add the renderScene pass to the composer
composer.addPass(bloomPass); // add the bloomPass to the composer

/* Create a line geometry from the spline */
const points = spline.getPoints(100); // get 100 points from the spline
const geometry = new THREE.BufferGeometry().setFromPoints(points); // create a new BufferGeometry from the points
const material = new THREE.LineBasicMaterial({ color: 0xff0000 }); // create a new LineBasicMaterial
const line = new THREE.Line(geometry, material); // create a new Line with the geometry and material
// scene.add(line); // add the line to the scene for debugging

/* Create a tube geometry from the spline */
const tubularSegments = 222; // set the number of tubular segments to 222
const radius = 0.65; // set the radius of the tube to 0.65
const radialSegments = 16; // set the number of radial segments to 8
const closed = true; // set the tube to be closed so you can't see ahead
const tubeGeo = new THREE.TubeGeometry(
  spline,
  tubularSegments,
  radius,
  radialSegments,
  closed
); // create a new TubeGeometry from the spline

// create edges geometry from the spline
const edges = new THREE.EdgesGeometry(tubeGeo, 0.2);
const lineMat = new THREE.LineBasicMaterial({ color: 0xff0000 });
const tubeLines = new THREE.LineSegments(edges, lineMat);
scene.add(tubeLines);

const numBoxes = 55;
const size = 0.075;
const boxGeo = new THREE.BoxGeometry(size, size, size);
for (let i = 0; i < numBoxes; i += 1) {
  const boxMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
  });
  const box = new THREE.Mesh(boxGeo, boxMat);
  const p = (i / numBoxes + Math.random() * 0.1) % 1;
  const pos = tubeGeo.parameters.path.getPointAt(p);
  pos.x += Math.random() - 0.4;
  pos.z += Math.random() - 0.4;
  box.position.copy(pos);
  const rote = new THREE.Vector3(
    Math.random() * Math.PI,
    Math.random() * Math.PI,
    Math.random() * Math.PI
  );
  box.rotation.set(rote.x, rote.y, rote.z);
  const edges = new THREE.EdgesGeometry(boxGeo, 0.2);
  const color = new THREE.Color().setHSL(0.7 - p, 1, 0.5);
  const lineMat = new THREE.LineBasicMaterial({ color });
  const boxLines = new THREE.LineSegments(edges, lineMat);
  boxLines.position.copy(pos);
  boxLines.rotation.set(rote.x, rote.y, rote.z);
  // scene.add(box);
  scene.add(boxLines);
}

function updateCamera(t) {
  const time = t * 0.1;
  const looptime = 10 * 1000;
  const p = (time % looptime) / looptime;
  const pos = tubeGeo.parameters.path.getPointAt(p);
  const lookAt = tubeGeo.parameters.path.getPointAt((p + 0.03) % 1);
  camera.position.copy(pos);
  camera.lookAt(lookAt);
}

function animate(t = 0) {
  requestAnimationFrame(animate);
  updateCamera(t);
  composer.render(scene, camera);
  controls.update();
}
animate();

function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("resize", handleWindowResize, false);
