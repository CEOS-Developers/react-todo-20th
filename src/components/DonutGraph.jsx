import React from "react";
import styled from "styled-components";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DonutGraph = React.memo(({ percent }) => {
  console.log("도넛");

  if (isNaN(percent)) {
    percent = 0;
  }

  return (
    <Wrapper>
      <CircularProgressbar value={percent} text={`${Math.round(percent)}%`} />
    </Wrapper>
  );
});

export default DonutGraph;

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  width: 10rem;
  margin: 0.625rem 1.25rem 1.25rem 0;

  .CircularProgressbar-path {
    stroke: #5f81ff;
  }

  .CircularProgressbar-trail {
    stroke: #dfe8ff;
  }

  .CircularProgressbar-text {
    fill: #000;
    font-weight: 600;
  }
`;
