"use client";

import { Canvas } from "@react-three/fiber";
import { BoxExample } from "./box";
import { OrbitControls } from "@react-three/drei";
import { STLExample } from "./stl";

export const ThreeMainComponent = () => {
  return (
    <>
      <Canvas>
        <STLExample url="/parts.stl" />
        <BoxExample />
        <OrbitControls />
      </Canvas>
    </>
  );
};
