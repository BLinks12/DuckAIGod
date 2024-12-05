// RoadmapSection.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';

export const RoadmapSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <RoadmapContainer id="roadmap">
      <h2 data-aos="fade-up">Roadmap</h2>
      <Timeline>
        {/* Timeline items with AOS animations */}
        <TimelineItem data-aos="fade-right">
          <h3>Q1 2023</h3>
          <p>Project Conceptualization, Team Formation, Initial Development</p>
        </TimelineItem>
        <TimelineItem data-aos="fade-left">
          <h3>Q2 2023</h3>
          <p>Website Launch, Smart Contract Deployment, Initial Token Offering</p>
        </TimelineItem>
        {/* Add more timeline items as needed */}
      </Timeline>
    </RoadmapContainer>
  );
};

const RoadmapContainer = styled.section`
  padding: 100px 20px;
  background-color: #0e0e0e;
  text-align: center;
  h2 {
    font-size: 2.5em;
    margin-bottom: 40px;
    color: #ffcc00;
  }
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimelineItem = styled.div`
  width: 80%;
  padding: 20px;
  margin: 20px 0;
  background-color: #1f1f1f;
  border-radius: 10px;
  h3 {
    font-size: 1.8em;
    margin-bottom: 10px;
    color: #ffffff;
  }
  p {
    color: #bbbbbb;
  }
`;
