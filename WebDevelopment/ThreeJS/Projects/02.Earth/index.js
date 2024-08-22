import * as THREE from "three"; // import the entire three.js library
import { OrbitControls } from "jsm/controls/OrbitControls.js"; // import OrbitControls

import getStarfield from "./src/getStarfield.js";
import { getFresnelMat } from "./src/getFresnelMat.js";

/* Create a new PerspectiveCamera with the following parameters: */
const fov = 75; // set the field of view to 75 degrees
const w = window.innerWidth;
const h = window.innerHeight;
const aspect = w / h; // set the aspect ratio to the window width divided by the window height
const near = 0.1; // set the near clipping plane to 0.1
const far = 1000; // set the far clipping plane to 10
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far); // create a new PerspectiveCamera
camera.position.z = 5; // set the z position of the camera to 5

/* Create a New Scene */
const scene = new THREE.Scene();

/* Create a new WebGLRenderer with the following parameters: */
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);
// THREE.ColorManagement.enabled = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

/* Create a new OrbitControls with the following parameters: */
new OrbitControls(camera, renderer.domElement); // create new OrbitControls

/* Create a new Group */
const earthGroup = new THREE.Group(); // create a new Group
earthGroup.rotation.z = (-23.4 * Math.PI) / 180; // tilt the earth's axis
scene.add(earthGroup); // add the group to the scene

/* Create the Earth */
const detail = 12; // set the detail level of the icosahedron
const loader = new THREE.TextureLoader(); // create a new TextureLoader
const geometry = new THREE.IcosahedronGeometry(1, detail); // create a new IcosahedronGeometry
const material = new THREE.MeshPhongMaterial({
  // create a new MeshPhongMaterial
  map: loader.load("./textures/00_earthmap1k.jpg"), // load the earth texture map
  specularMap: loader.load("./textures/02_earthspec1k.jpg"), // load the earth specular map
  bumpMap: loader.load("./textures/01_earthbump1k.jpg"), // load the earth bump map
  bumpScale: 0.04, // set the bump scale
});
// material.map.colorSpace = THREE.SRGBColorSpace; // set the color space of the map to sRGB
const earthMesh = new THREE.Mesh(geometry, material); // create a new Mesh with the geometry and material
earthGroup.add(earthMesh); // add the mesh to the group

/* Create the lights */
const lightsMat = new THREE.MeshBasicMaterial({
  // create a new MeshBasicMaterial
  map: loader.load("./textures/03_earthlights1k.jpg"), // load the earth lights map
  blending: THREE.AdditiveBlending, // set the blending mode to additive
});
const lightsMesh = new THREE.Mesh(geometry, lightsMat); // create a new Mesh with the geometry and material
earthGroup.add(lightsMesh); // add the mesh to the group

/* Create the clouds */
const cloudsMat = new THREE.MeshStandardMaterial({
  // create a new MeshStandardMaterial
  map: loader.load("./textures/04_earthcloudmap.jpg"), // load the earth cloud map
  transparent: true, // set the material to be transparent
  opacity: 0.8, // set the opacity of the material
  blending: THREE.AdditiveBlending, // set the blending mode to additive
  alphaMap: loader.load("./textures/05_earthcloudmaptrans.jpg"), // load the earth cloud map transparency
  // alphaTest: 0.3, // set the alpha test value
});
const cloudsMesh = new THREE.Mesh(geometry, cloudsMat); // create a new Mesh with the geometry and material
cloudsMesh.scale.setScalar(1.003); // scale the clouds mesh slightly larger than the earth mesh
earthGroup.add(cloudsMesh); // add the mesh to the group

/* Create the glow on the Earth */
const fresnelMat = getFresnelMat(); // create a new FresnelMaterial
const glowMesh = new THREE.Mesh(geometry, fresnelMat); // create a new Mesh with the geometry and material
glowMesh.scale.setScalar(1.01); // scale the glow mesh slightly larger than the earth mesh
earthGroup.add(glowMesh); // add the mesh to the group

/* Create the Starfield */
const stars = getStarfield({ numStars: 2000 }); // create a new starfield
scene.add(stars); // add the starfield to the scene

/* Create the Sun Light */
const sunLight = new THREE.DirectionalLight(0xffffff, 2.0); // create a new DirectionalLight
sunLight.position.set(-2, 0.5, 1.5); // set the position of the light
scene.add(sunLight); // add the light to the scene

/* Animate the Scene */
function animate() {
  // create an animation loop that does the following each frame
  requestAnimationFrame(animate); // request the next frame

  earthMesh.rotation.y += 0.002; // rotate the earth mesh around the y-axis
  lightsMesh.rotation.y += 0.002; // rotate the lights mesh around the y-axis
  cloudsMesh.rotation.y += 0.0023; // rotate the clouds mesh around the y-axis
  glowMesh.rotation.y += 0.002; // rotate the glow mesh around the y-axis
  stars.rotation.y -= 0.0002; // rotate the starfield around the y-axis
  renderer.render(scene, camera); // render the scene with the camera
}

animate(); // start the animation loop

/* Handle Window Resize */
function handleWindowResize() {
  // create a function to handle window resizing
  camera.aspect = window.innerWidth / window.innerHeight; // set the aspect ratio of the camera
  camera.updateProjectionMatrix(); // update the projection matrix of the camera
  renderer.setSize(window.innerWidth, window.innerHeight); // set the size of the renderer
}

window.addEventListener("resize", handleWindowResize, false); // add an event listener for window resizing
