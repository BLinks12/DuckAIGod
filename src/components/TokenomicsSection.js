// TokenomicsSection.js
import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

export const TokenomicsSection = () => {
  const data = {
    labels: ['Liquidity Pool', 'Marketing', 'Development', 'Community Rewards', 'Team'],
    datasets: [
      {
        data: [50, 20, 15, 10, 5],
        backgroundColor: ['#ffcc00', '#e6b800', '#cccc00', '#b3a800', '#999900'],
        borderColor: '#151515',
        borderWidth: 2,
      },
    ],
  };

  return (
    <TokenomicsContainer id="tokenomics">
      <h2>Tokenomics</h2>
      <ChartWrapper>
        <Doughnut data={data} />
      </ChartWrapper>
      {/* Additional content */}
    </TokenomicsContainer>
  );
};

const TokenomicsContainer = styled.section`
  padding: 100px 20px;
  background-color: #151515;
  text-align: center;
  h2 {
    font-size: 2.5em;
    margin-bottom: 40px;
    color: #ffcc00;
  }
`;

const ChartWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;
