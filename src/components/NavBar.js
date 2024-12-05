// NavBar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export const NavBar = () => {
  return (
    <Nav>
      <Logo>
        <img src="/images/duckai_logo.png" alt="DuckAI Logo" />
        <h1>DuckAI</h1>
      </Logo>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/#tokenomics">Tokenomics</StyledLink>
        <StyledLink to="/#roadmap">Roadmap</StyledLink>
        <StyledLink to="/#nft">NFT Marketplace</StyledLink>
        <StyledLink to="/#ai-chatbot">AI Chatbot</StyledLink>
      </NavLinks>
      <WalletButton>
        <WalletMultiButton />
      </WalletButton>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #151515;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 50px;
    margin-right: 10px;
  }
  h1 {
    font-family: 'Fredoka One', cursive;
    font-size: 2em;
    color: #ffcc00;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  margin: 0 15px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    color: #ffcc00;
  }
`;

const WalletButton = styled.div`
  button {
    background-color: #ffcc00 !important;
    color: #000000 !important;
    font-weight: bold !important;
    border-radius: 25px !important;
    padding: 10px 20px !important;
    &:hover {
      background-color: #e6b800 !important;
    }
  }
`;
