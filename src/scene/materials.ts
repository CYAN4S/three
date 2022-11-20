import { MeshStandardMaterial } from "three";

const cyan = new MeshStandardMaterial({
  color: 302994,
  roughness: 0,
  metalness: 0,
  emissive: 6424
});

const white = new MeshStandardMaterial({
  color: 16777215,
  roughness: 0,
  metalness: 0,
  emissive: 0,
});

const yellow = new MeshStandardMaterial({
  color: 16766208,
  roughness: 0,
  metalness: 0,
  emissive: 4008192,
});

const pink = new MeshStandardMaterial({
  color: 16737920,
  roughness: 0,
  metalness: 0,
  emissive: 7667712,
});

export { cyan, white, yellow, pink };
