// CommunitySection.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';

export const CommunitySection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <CommunityContainer id="community">
      <h2 data-aos="fade-up">Join the DuckAI Community</h2>
      <p data-aos="fade-up">Stay updated and connect with fellow DuckAI enthusiasts.</p>
      <SocialLinks data-aos="fade-up">
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
    </CommunityContainer>
  );
};

const CommunityContainer = styled.section`
  padding: 100px 20px;
  background-color: #0e0e0e;
  text-align: center;
  h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #ffcc00;
  }
  p {
    font-size: 1.1em;
    color: #dddddd;
    margin-bottom: 40px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  a {
    margin: 10px;
    img {
      width: 50px;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
