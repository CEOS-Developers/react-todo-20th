import styled from "styled-components";
import { S } from "./Common.style";

import Item from "./Item";

const TodoBoard = ({ todos, removeItem, toggleItem }) => {
  const sortedTodos = todos.sort((a, b) => a.id - b.id); // 토글된 항목은 하위에 위치

  return (
    <Wrapper>
      <S.Ment>What I have to do</S.Ment>
      {sortedTodos.map(
        (todo) =>
          !todo.checked && (
            <Item key={todo.id} {...{ todo, removeItem, toggleItem }} />
          )
      )}
      <S.Ment>What I did</S.Ment>
      {sortedTodos.map(
        (todo) =>
          todo.checked && (
            <Item key={todo.id} {...{ todo, removeItem, toggleItem }} />
          )
      )}
    </Wrapper>
  );
};

export default TodoBoard;

const Wrapper = styled.ul`
  width: 100%;
`;
