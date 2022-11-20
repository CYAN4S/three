import { Mesh, SphereGeometry } from "three";
import { cyan, white, pink, yellow } from "./materials";

const meshData = [
  {
    matrix: [0, 0, 0],
    geometry: 2.2,
    material: cyan,
  },
  {
    matrix: [2.5334761422566405, 2.300456838412285, -2.4858711675057674],
    geometry: 0.2,
    material: yellow,
  },
  {
    matrix: [-1.8680180502508696, 2.535334468821087, -1.939476769430338],
    geometry: 0.5,
    material: pink,
  },
  {
    matrix: [3.0196702791756507, 1.2102173831226568, -2.18925151898364],
    geometry: 0.8,
    material: white,
  },
  {
    matrix: [0.24130110804720384, -0.0238201759354435, -3.531550661391431],
    geometry: 0.6,
    material: pink,
  },
  {
    matrix: [0.27395999891223055, 3.2565404059585825, -3.2397613861505246],
    geometry: 1.0,
    material: cyan,
  },
  {
    matrix: [-1.5113066225134713, -2.3181928093637416, -1.9097713879893403],
    geometry: 0.8,
    material: white,
  },
  {
    matrix: [-1.6349381791892172, -2.623269624072866, 1.9805543972173774],
    geometry: 1.0,
    material: yellow,
  },
  {
    matrix: [-1.1184956492345584, 5.719642048946261, -3.208693170606285],
    geometry: 0.6,
    material: cyan,
  },
  {
    matrix: [1.8063388137764322, -2.771519228697124, -0.8295800125444523],
    geometry: 0.8,
    material: cyan,
  },
  {
    matrix: [1.6990111678267192, -0.9461697303777821, -2.6603761971323032],
    geometry: 0.6,
    material: cyan,
  },
  {
    matrix: [1.7050748802034588, 3.298387832747191, -1.3365309695478556],
    geometry: 0.5,
    material: white,
  },
  {
    matrix: [-1.3855870787504116, -3.9923799247526586, 1.1970200323700493],
    geometry: 0.5,
    material: white,
  },
  {
    matrix: [0.32546813420989384, -4.664055213046129, 2.062706126723571],
    geometry: 0.6,
    material: cyan,
  },
];

const meshes = meshData.map((v) => {
  const result = new Mesh(new SphereGeometry(v.geometry, 64, 32), v.material);
  result.position.set(v.matrix[0], v.matrix[1], v.matrix[2]);
  return result;
});

export default meshes;
