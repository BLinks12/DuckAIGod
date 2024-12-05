// HeroSection.js
import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Particles } from './Particles';
import { OrbitControls } from '@react-three/drei';

export const HeroSection = () => {
  return (
    <HeroContainer>
      <CanvasWrapper>
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <Particles />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </CanvasWrapper>
      <Content>
        <h2>Welcome to DuckAI</h2>
        <h3>The Ultimate Memecoin on Solana</h3>
        <button>Buy $DUCKY Now</button>
      </Content>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  height: 100vh;
  position: relative;
  background: linear-gradient(to bottom, #0e0e0e, #151515);
`;

const CanvasWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
  h2 {
    font-size: 3em;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 1.5em;
    margin-bottom: 40px;
    color: #ffcc00;
  }
  button {
    padding: 15px 30px;
    background-color: #ffcc00;
    border: none;
    border-radius: 30px;
    color: #000000;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background-color: #e6b800;
    }
  }
`;
