import React from "react";
import { Canvas, Camera } from "@react-three/fiber";

const Scene = () => {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0, 1], fov: 45 }}>
        <ambientLight intensity={0.3} color="fffff" />
        <pointLight intensity={1.0} position={[10, 10, 10]} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh position={[0, 0, -1]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="bada55" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Scene;
