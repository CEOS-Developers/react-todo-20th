import React from "react";
import styled from "styled-components";
import { S } from "./Common.style";

import Item from "./Item";

const TodoBoard = React.memo(({ todos, removeItem, toggleItem }) => {
  console.log("보드");
  const sortedTodos = todos.sort((a, b) => a.id - b.id); // 토글된 항목은 하위에 위치

  return (
    <Wrapper>
      <ListWrapper>
        <Title>What I have to do</Title>
        {sortedTodos.map(
          (todo) =>
            !todo.checked && (
              <Item key={todo.id} {...{ todo, removeItem, toggleItem }} />
            )
        )}
      </ListWrapper>
      <ListWrapper>
        <Title>What I did</Title>
        {sortedTodos.map(
          (todo) =>
            todo.checked && (
              <Item key={todo.id} {...{ todo, removeItem, toggleItem }} />
            )
        )}
      </ListWrapper>
    </Wrapper>
  );
});

export default TodoBoard;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1rem 0;
`;

const ListWrapper = styled.div``;

const Title = styled(S.Ment)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
