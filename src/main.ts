import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  Color,
  Clock,
  AmbientLight,
} from "three";
import meshes from "./scene/meshes";

let x = 0;
let y = 0;

// Add event
window.addEventListener("deviceorientation", onDeviceOrientation, true);

function onDeviceOrientation(ev: DeviceOrientationEvent) {
  x = ev.gamma ? ev.gamma / 180 : x;
  y = ev.beta ? ev.beta / 180 : y;
}

window.addEventListener("mousemove", onMouseMove);

function onMouseMove(ev: MouseEvent) {
  x = ev.x / screen.width - 0.5;
  y = ev.y / screen.height - 0.5;
}

// Clock
const clock = new Clock();

// Scene
const scene = new Scene();
scene.position.set(0, 0, 0);
scene.background = new Color(0xf5f5f5);

// Camera
const fov = 60;
const aspect = 1;
const near = 0.1;
const far = 100;
const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.set(8, 0, 0);
camera.rotation.y = Math.PI / 2;

// Renderer
const canvas = document.querySelector<HTMLCanvasElement>("#three")!;
const renderer = new WebGLRenderer({ canvas, antialias: true });

// Light
const directionalLight = new DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

const ambientLight = new AmbientLight(0xffffff, 0.9);
scene.add(ambientLight);

// Object
meshes.forEach((mesh) => {
  scene.add(mesh);
});

// For render
function resizeRendererToDisplaySize(renderer: WebGLRenderer) {
  const canvas = renderer.domElement;
  const pixelRatio = window.devicePixelRatio;
  const width = (canvas.clientWidth * pixelRatio) | 0;
  const height = (canvas.clientHeight * pixelRatio) | 0;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

// Smooth move
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t * 8;
}

// Render loop
function render() {
  requestAnimationFrame(render);

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  const delta = clock.getDelta();

  camera.position.z = lerp(
    camera.position.z,
    x + 0.8 + 2.1 * (canvas.clientWidth / 1920),
    delta
  );
  camera.position.y = lerp(camera.position.y, y, delta);

  renderer.render(scene, camera);
}

// Start
render();

console.log();
