// Particles.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const Particles = () => {
  const particlesRef = useRef();

  useFrame(({ clock }) => {
    particlesRef.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  const particles = [];
  for (let i = 0; i < 5000; i++) {
    particles.push(
      <mesh key={i} position={[Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50]}>
        <sphereBufferGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#ffcc00" />
      </mesh>
    );
  }

  return <group ref={particlesRef}>{particles}</group>;
};
