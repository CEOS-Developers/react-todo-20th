import React, { useEffect } from "react";
import styled from "styled-components";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Footer = ({ todos }) => {
  // 전체 항목과 한 일 항목의 개수
  const totalCount = todos.length;
  const doneCount = todos.reduce((count, todo) => {
    return todo.checked ? count + 1 : count;
  }, 0);

  const percent = (doneCount / totalCount) * 100;

  return (
    <Wrapper>
      {doneCount}/{totalCount}
      <CircularProgressbar value={percent} text={`${Math.round(percent)}%`} />
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 14rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: flex-start;
  margin-top: 0.625rem;

  .CircularProgressbar-path {
    stroke: #5f81ff;
  }

  .CircularProgressbar-trail {
    stroke: #dfe8ff;
  }

  .CircularProgressbar-text {
    fill: #000;
    font-weight: 600;
    //font-family: sans-serif;
  }
`;
