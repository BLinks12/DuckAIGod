// AboutSection.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <AboutContainer id="about">
      <h2 data-aos="fade-up">About DuckAI</h2>
      <p data-aos="fade-up">
        DuckAI is revolutionizing the memecoin space on Solana by integrating advanced AI technology with the power of
        blockchain. Our mission is to create a community-driven token that not only brings fun and memes but also real
        utility and innovation.
      </p>
      {/* Additional content */}
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  padding: 100px 20px;
  background-color: #0e0e0e;
  text-align: center;
  h2 {
    font-size: 2.5em;
    margin-bottom: 40px;
    color: #ffcc00;
  }
  p {
    font-size: 1.1em;
    line-height: 1.6;
    color: #dddddd;
    max-width: 800px;
    margin: 0 auto;
  }
`;
