import React, { useEffect } from "react";
import styled from "styled-components";

const TodoDate = ({ setDate }) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const titleDate = `⊹ ⋆ ${year}. ${month}. ${day}. ⋆ ⊹`;

  const textDate = `${year}-${month}-${day}`;
  useEffect(() => {
    setDate(textDate);
  }, [setDate, textDate]);

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
