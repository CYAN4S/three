import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  DirectionalLight,
  AmbientLight,
  SphereGeometry,
  Color,
  MeshStandardMaterial,
  Clock,
  HemisphereLight,
} from "three";

// Scene
const scene = new Scene();
scene.background = new Color(0x26bfb3);

const clock = new Clock();

// Camera
const fov = 60;
const aspect = 2;
const near = 0.1;
const far = 100;
const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 0)

// Renderer
const canvas = document.querySelector<HTMLCanvasElement>("#three")!;
const renderer = new WebGLRenderer({ canvas, antialias: true });

// Light
const directionalLight = new DirectionalLight(0xffffff, 1);
directionalLight.position.set(-1, 2, 5);
scene.add(directionalLight);

const hemisphereLight = new HemisphereLight(0x26bfb3, 0xFFDD33, 0.1);
scene.add(hemisphereLight)

const ambientLight = new AmbientLight(0x26bfb3, 0.4);
scene.add(ambientLight);

// Object
const geometries = [0.25, 0.5, 1, 2, 4].map(
  (v) => new SphereGeometry(v, 40, 30)
);

const cyanMaterial = new MeshStandardMaterial({
  color: 0x26bfb3,
  roughness: 0.3,
  metalness: 0,
  emissive: 0x282828,
});
const whiteMaterial = new MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0,
  metalness: 0,
  emissive: 0x222222,
});

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const poses = [...Array(20)].map(() => [
  random(-20, 20),
  random(-20, 20),
  random(-20, 20),
]);

const posesw = [...Array(10)].map(() => [
  random(-10, 10),
  random(-10, 10),
  random(-10, 10),
]);

poses.forEach((v) => {
  const sphere = new Mesh(geometries[3], cyanMaterial);
  sphere.position.set(v[0], v[1], v[2]);
  scene.add(sphere);
});

posesw.forEach((v) => {
  const sphere = new Mesh(geometries[0], whiteMaterial);
  sphere.position.set(v[0], v[1], v[2]);
  scene.add(sphere);
});

// For Render
function resizeRendererToDisplaySize(renderer: WebGLRenderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

// Render loop
function render() {
  requestAnimationFrame(render);

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  camera.rotateY(clock.getDelta() * 0.1);

  renderer.render(scene, camera);
}

// Start
render();
