import React from "react";
import styled from "styled-components";

const TodoItem = React.memo(({ todo, todos, setTodos }) => {
  const toggleTodo = () => {
    setTodos((todos) =>
      todos.map((t) => (t.id === todo.id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTodo = () => {
    setTodos((todos) => todos.filter((t) => t.id !== todo.id));
  };

  return (
    <ListItem done={todo.done}>
      <DoneBtn done={todo.done} onClick={toggleTodo} />
      <span>{todo.text}</span>
      <DelBtn onClick={deleteTodo}>×</DelBtn>
    </ListItem>
  );
});

export default TodoItem;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid #ffffff85;
  border-radius: 20px;
  margin-bottom: 13px;
  padding: 5px;
  background-color: #ffffff11;

  span {
    font-size: 18px;
    color: ${({ done }) => (done ? "#a3a3a3" : "white")};
    text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  }
`;

const DoneBtn = styled.button`
  all: unset;
  font-size: 25px;
  color: #ff3898;
  margin: 0 10px;
  cursor: pointer;
  text-shadow: 0px 0px 5px #ff3898;

  &::before {
    content: "${(props) => (props.done ? "♥" : "♡")}";
  }

  &:hover::before {
    content: "♥";
  }
`;

const DelBtn = styled.button`
  all: unset;
  margin: 0 10px 0 auto;
  padding-bottom: 3px;
  color: #29e678;
  font-size: 30px;
  text-shadow: 0px 0px 10px #ffffff;
  cursor: pointer;
  display: flex;

  &:hover {
    text-shadow: 0px 0px 13px #ff3898;
  }
`;
