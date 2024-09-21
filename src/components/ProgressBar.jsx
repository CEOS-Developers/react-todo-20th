import React from "react";
import styled from "styled-components";

const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarWrapper>
      <Progress style={{ width: `${progress}%` }}>
        {progress > 0 && progress < 100 && <Tooltip>{`${progress}%`}</Tooltip>}
      </Progress>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 20px;
  background-color: #ffffff1a;
  border-radius: 10px;
  margin-top: 20px;
`;

const Progress = styled.div`
  position: relative;
  height: 100%;
  background-color: #ff3898;
  border-radius: inherit;
  transition: width 0.3s ease-in-out;
`;

const Tooltip = styled.div`
  position: absolute;
  right: -14px;
  top: -33px;
  font-size: 11px;
  font-weight: 500;
  color: #24d46d;
  padding: 4px 6px;
  border-radius: 5px;
  border: 0.3px solid #24d46d;
  background: #ffffff1a;
  z-index: 1;
`;
