import React, { useEffect } from "react";
import styled from "styled-components";

// 상단 날짜 타이틀
const TodoDate = ({ date }) => {
  const [year, month, day] = date.split("-");
  const titleDate = `⊹ ⋆ ${year}. ${month}. ${day}. ⋆ ⊹`;

  return <DateWrapper>{titleDate}</DateWrapper>;
};

export default TodoDate;

const DateWrapper = styled.div`
  font-weight: 800;
  font-size: 40px;
  width: 100%;
  text-align: center;
  color: #ffffff;
  margin-bottom: 25px;
  text-shadow: 0px 0px 15px #ff3898;
`;
