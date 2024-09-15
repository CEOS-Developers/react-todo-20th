import React from "react";
import styled from "styled-components";

const Footer = () => {
  // 전체 항목과 한 일 항목의 개수
  const todosArray = JSON.parse(localStorage.getItem("todos")) || [];
  const totalCount = todosArray.length;
  const doneCount = todosArray.reduce((count, todo) => {
    return todo.checked ? count + 1 : count;
  }, 0);

  return (
    <>
      <Wrapper>
        {doneCount}/{totalCount}
      </Wrapper>
    </>
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
`;
