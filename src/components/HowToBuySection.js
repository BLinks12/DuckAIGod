// HowToBuySection.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';

export const HowToBuySection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <HowToBuyContainer id="how-to-buy">
      <h2 data-aos="fade-up">How to Buy $DUCKY</h2>
      <ol data-aos="fade-up">
        <li>
          <strong>Step 1:</strong> Set up a Solana-compatible wallet (e.g., Phantom).
        </li>
        <li>
          <strong>Step 2:</strong> Add Solana (SOL) to your wallet.
        </li>
        <li>
          <strong>Step 3:</strong> Connect your wallet using the "Connect Wallet" button.
        </li>
        <li>
          <strong>Step 4:</strong> Click "Buy $DUCKY Now" to purchase tokens.
        </li>
      </ol>
      <button>Buy $DUCKY Now</button>
    </HowToBuyContainer>
  );
};

const HowToBuyContainer = styled.section`
  padding: 100px 20px;
  background-color: #151515;
  text-align: center;
  h2 {
    font-size: 2.5em;
    margin-bottom: 40px;
    color: #ffcc00;
  }
  ol {
    list-style: decimal;
    text-align: left;
    max-width: 800px;
    margin: 0 auto 40px auto;
    li {
      font-size: 1.2em;
      margin: 20px 0;
      color: #ffffff;
    }
    strong {
      color: #ffcc00;
    }
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
