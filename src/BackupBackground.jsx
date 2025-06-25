import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

// Component to animate a shape with randomized float motion
function FloatingSketch({ points, color = '#ffffff', offset = [0, 0, 0], amplitude = 0.4, speed = 0.5 }) {
  const ref = useRef();
  const { size, camera } = useThree();
  const phase = useRef(Math.random() * Math.PI * 2); // unique phase for desync
  const rotSpeed = useRef((Math.random() - 0.5) * 0.005); // gentle rotation
  const direction = useRef([Math.random(), Math.random(), 0]); // custom float direction
  const halfWidth = size.width / (2 * camera.zoom);
  const halfHeight = size.height / (2 * camera.zoom);
  const offset0 = 0.5;
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.x += speed * direction.current[0];
    ref.current.position.y += speed * direction.current[1];
    ref.current.rotation.z += rotSpeed.current;

    if (ref.current.position.x > (halfWidth - offset0) || ref.current.position.x < -(halfWidth - offset0)) {
      speed = -1 * speed;
      console.log(ref.current.position.x + " " + ref.current.position.y + " &&&&&&&&&&&&&&&&&& " + speed + " " + halfWidth + " " + halfHeight);
    }
    if (ref.current.position.y > (halfHeight - offset0) || ref.current.position.y < -(halfHeight - offset0)) {
      speed = -1 * speed;
      console.log(ref.current.position.x + " " + ref.current.position.y + " &&&&&&&&&&&&&&&&&& " + speed + " " + halfWidth + " " + halfHeight);
    }
  });

  return (
    <line ref={ref} position={[...offset]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flat())}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} linewidth={1} />
    </line>
  );
}

// Shape generators
function createSquare(size = 1) {
  return [
    [-size, -size, 0],
    [size, -size, 0],
    [size, size, 0],
    [-size, size, 0],
    [-size, -size, 0],
  ];
}

function createCircle(radius = 1, segments = 32) {
  const points = [];
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * 2 * Math.PI;
    points.push([Math.cos(angle) * radius, Math.sin(angle) * radius, 0]);
  }
  return points;
}

function createLine(length = 1) {
  return [
    [-length / 2, 0, 0],
    [length / 2, 0, 0],
  ];
}

export default function SketchyBackground() {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none opacity-100">
      <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 10] }}>
        {/* Randomized Floating Shapes */}
        <FloatingSketch points={createSquare(0.3)} color="#facc15" offset={[-1.5, 0.5, 0]} speed={0.04} amplitude={0.2} />
        {/* <FloatingSketch points={createCircle(0.35)} color="#34d399" offset={[4, -2, 0]} speed={0.6} amplitude={0.3} />
        <FloatingSketch points={createLine(0.6)} color="#60a5fa" offset={[-5, -1, 0]} speed={0.8} amplitude={0.25} />
        <FloatingSketch points={createCircle(0.25)} color="#f87171" offset={[1, 0, 0]} speed={0.5} amplitude={0.3} />
        <FloatingSketch points={createSquare(0.2)} color="#c084fc" offset={[1.8, 3, 0]} speed={0.7} amplitude={0.25} />
        <FloatingSketch points={createLine(0.5)} color="#38bdf8" offset={[-5, 3, 0]} speed={0.45} amplitude={0.2} />

        <FloatingSketch points={createSquare(0.3)} color="#facc15" offset={[1, 7, 0]} speed={0.4} amplitude={0.2} />
        <FloatingSketch points={createCircle(0.35)} color="#34d399" offset={[-4, -0, 0]} speed={0.6} amplitude={0.3} />
        <FloatingSketch points={createLine(0.6)} color="#60a5fa" offset={[-5, 0, 0]} speed={0.8} amplitude={0.25} />
        <FloatingSketch points={createCircle(0.25)} color="#f87171" offset={[4, -1, 0]} speed={0.5} amplitude={0.3} />
        <FloatingSketch points={createSquare(0.2)} color="#c084fc" offset={[-2, 3, 0]} speed={0.7} amplitude={0.25} />
        <FloatingSketch points={createLine(0.5)} color="#38bdf8" offset={[-1.5, 0.5, 0]} speed={0.45} amplitude={0.2} />

        <FloatingSketch points={createSquare(0.3)} color="#facc15" offset={[-4, 6, 0]} speed={0.4} amplitude={0.2} />
        <FloatingSketch points={createCircle(0.35)} color="#34d399" offset={[1, -2, 0]} speed={0.6} amplitude={0.3} />
        <FloatingSketch points={createLine(0.6)} color="#60a5fa" offset={[1, 3, 0]} speed={0.8} amplitude={0.25} />
        <FloatingSketch points={createCircle(0.25)} color="#f87171" offset={[-1, -9, 0]} speed={0.5} amplitude={0.3} />
        <FloatingSketch points={createSquare(0.2)} color="#c084fc" offset={[3, 6, 0]} speed={0.7} amplitude={0.25} />
        <FloatingSketch points={createLine(0.5)} color="#38bdf8" offset={[-2, -2, 0]} speed={0.45} amplitude={0.2} /> */}
      </Canvas>
    </div>
  );
}
