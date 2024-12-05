// Footer.js
import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2023 DuckAI. All rights reserved.</p>
      <SocialLinks>
        <a href="https://twitter.com/duckai" target="_blank" rel="noopener noreferrer">
          <img src="/images/twitter_icon.png" alt="Twitter" />
        </a>
        <a href="https://t.me/duckai" target="_blank" rel="noopener noreferrer">
          <img src="/images/telegram_icon.png" alt="Telegram" />
        </a>
        <a href="https://discord.gg/duckai" target="_blank" rel="noopener noreferrer">
          <img src="/images/discord_icon.png" alt="Discord" />
        </a>
        <a href="https://medium.com/@duckai" target="_blank" rel="noopener noreferrer">
          <img src="/images/medium_icon.png" alt="Medium" />
        </a>
      </SocialLinks>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #151515;
  padding: 20px;
  text-align: center;
  p {
    margin: 5px 0;
    color: #bbbbbb;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  a {
    margin: 0 10px;
    img {
      width: 30px;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
