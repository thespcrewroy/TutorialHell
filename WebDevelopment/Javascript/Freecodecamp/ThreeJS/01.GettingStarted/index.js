import * as THREE from "three"; // import the entire three.js library
import { OrbitControls } from "jsm/controls/OrbitControls.js"; // import OrbitControls

/* Create a new PerspectiveCamera with the following parameters: */
const fov = 75; // set the field of view to 75 degrees
const w = window.innerWidth; // get the window width of the browser
const h = window.innerHeight; // get the window height of the browser
const aspect = w / h; // set the aspect ratio to the window width divided by the window height
const near = 0.1; // set the near clipping plane to 0.1
const far = 10; // set the far clipping plane to 10
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far); // create a new PerspectiveCamera
camera.position.z = 2; // set the z position of the camera to 2

/* Create a new WebGLRenderer with the following parameters: */
const renderer = new THREE.WebGLRenderer({ antialias: true }); // create a new WebGLRenderer
renderer.setSize(w, h); // set the size of the renderer to the window width and height
document.body.appendChild(renderer.domElement); // append the renderer to the body of the document

/* Create a New Scene */
const scene = new THREE.Scene(); // create a new Scene

/* Create a new OrbitControls with the following parameters: */
const controls = new OrbitControls(camera, renderer.domElement); // create new OrbitControls
controls.enableDamping = true; // enable damping for smoother controls
controls.dampingFactor = 0.03; // set the damping factor

/* Create a new IcosahedronGeometry with the following parameters: */
const geometry = new THREE.IcosahedronGeometry(1.0, 2); // create a new IcosahedronGeometry (radius = 1.0, detail = 2)
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff, // set the color of the material to white
  flatShading: true, // flat shading will make the mesh look faceted
}); // MeshStandardMaterial will interact with lights
const mesh = new THREE.Mesh(geometry, material); // create a new Mesh with the geometry and material
scene.add(mesh); // add the mesh to the scene

/* Create a new WireMesh with the following parameters: */
const wireMat = new THREE.MeshBasicMaterial({
  color: 0xffffff, // set the color of the material to white
  wireframe: true, // set the wireframe property to true
}); // MeshBasicMaterial will not interact with lights
const wireMesh = new THREE.Mesh(geometry, wireMat); // create a new Mesh with the geometry and material
wireMesh.scale.setScalar(1.0001); // scale the wireframe mesh slightly larger than the solid mesh
mesh.add(wireMesh); // add the wireframe mesh to the scene

/* Create a new DirectionalLight with the following parameters: */
const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500); // new HemisphereLight (white = top, grey = bottom)
scene.add(hemiLight); // add the hemisphere light to the scene

function animate(t = 0) {
  // create an animation loop that does the following each frame
  requestAnimationFrame(animate); // request the next frame
  mesh.rotation.y = t * 0.0001; // rotate the mesh around the y-axis
  renderer.render(scene, camera); // render the scene with the camera
  controls.update(); // update the controls
}
animate(); // start the animation loop

/* Render the Scene */
renderer.render(scene, camera); // render the scene with the camera
