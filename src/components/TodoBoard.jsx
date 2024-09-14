import { useState } from "react";
import styled from "styled-components";
import Item from "./Item";

const TodoBoard = ({ todos }) => {
  return (
    <Wrapper>
      {todos.map((todo) => (
        <Item todo={todo} key={todo.id} />
      ))}
    </Wrapper>
  );
};

export default TodoBoard;

const Wrapper = styled.ul`
  width: 100%;
  padding-left: 0;
`;
