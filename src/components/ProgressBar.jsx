import React from "react";
import styled from "styled-components";

const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarWrapper>
      <Progress style={{ width: `${progress}%` }} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 20px;
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
`;

const Progress = styled.div`
  height: 100%;
  background-color: #ff3898;
  border-radius: inherit;
  transition: width 0.3s ease-in-out;
`;
