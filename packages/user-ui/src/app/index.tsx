import './app.css';
import * as THREE from 'three';
/*
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
  ratio: window.innerWidth / window.innerHeight
};
const canvas = document.getElementById('canvas')!;
const renderer = new THREE.WebGLRenderer({ canvas });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, aspect.ratio);
let group: THREE.Group;

const animate = () => {
  renderer.clear();
  group.rotation.x += 0.01;
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate)
}
*/

export default function App() {
  /*renderer.setSize(aspect.width, aspect.height);
  camera.position.set(1, 1, 7);
  scene.add(camera);

  group = new THREE.Group();

  // Mesh 1
  const geometry1 = new THREE.BoxGeometry(1, 1, 1);
  const material1 = new THREE.MeshBasicMaterial({ color: 'purple' })
  const mesh1 = new THREE.Mesh(geometry1, material1);
  mesh1.position.z = 1;
  group.add(mesh1)

  //Mesh 2
  const geometry2 = new THREE.BoxGeometry(1, 1, 1);
  const material2 = new THREE.MeshBasicMaterial({ color: 'green' });
  const mesh2 = new THREE.Mesh(geometry2, material2);
  mesh2.position.y = 2;
  group.add(mesh2);
  group.position.set(2, 0, 1)

  scene.add(group);

  const axisHelper = new THREE.AxesHelper(5);
  scene.add(axisHelper);

  animate();*/

  return null;
}
