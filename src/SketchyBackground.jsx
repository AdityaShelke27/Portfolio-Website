import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function FloatingLines() {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.3;
    ref.current.rotation.x = Math.sin(t * 0.5) * 0.2;
  });

  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[2, 0.4, 100, 16]} />
      <meshBasicMaterial wireframe color="#6ee7b7" />
    </mesh>
  );
}

export default function SketchyBackground() {
  return (
    <div className="fixed opacity-20 inset-0 z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[2, 5, 5]} />
        <FloatingLines />
      </Canvas>
    </div>
  );
}
