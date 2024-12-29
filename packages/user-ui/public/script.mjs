import * as THREE from 'three';
import { AnimationMixer, Vector3 } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
  ratio: window.innerWidth / window.innerHeight
};
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, aspect.ratio);

const ambient = new THREE.AmbientLight(0x404040, 20); // soft white light
scene.add(ambient);

const light = new THREE.PointLight(0xffffff, 100, 0, 2);
light.position.set(0, 5, 0);
scene.add(light);
const lightHelper = new THREE.PointLightHelper(light);
// scene.add(lightHelper);
let group;

const clock = new THREE.Clock();

renderer.setSize(aspect.width, aspect.height);
camera.position.set(0, 5, 8);
camera.lookAt(new Vector3(0, 0, -5));
// camera.position.set(0, 5, 7);
scene.add(camera);

const axisHelper = new THREE.AxesHelper(50);
// scene.add(axisHelper);


let model;
let mixer;
let actions;

const animate = () => {
  if ( model ) mixer.update(clock.getDelta());
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate)
}

const successHandler = gltf => {
  console.log(gltf);
  model = gltf.scene;
  model.scale.set(1, 1, 1);
  model.position.set(0, 0, 0);
  scene.add(model);

  mixer = new AnimationMixer(model);
  mixer.timeScale = 2;
  actions = gltf.animations.map(animation => mixer.clipAction(animation));
  actions.forEach(action => {
    action.setLoop(THREE.LoopOnce);
    action.clampWhenFinished = true;
  });
  console.log(actions);
  // renderer.render(scene, camera);
  animate();
}
const errorHandler = error => console.error(error);
loader.load('./game-entry.glb', successHandler, undefined, errorHandler);

const onMouseDown = () => {
 actions.forEach(action => action.reset().play());
}

document.addEventListener('mousedown', onMouseDown);
