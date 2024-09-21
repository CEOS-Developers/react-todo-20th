import React, { useState } from "react";
import styled from "styled-components";

const TodoItem = React.memo(({ todo, setTodos }) => {
  const [edit, setEdit] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const toggleTodo = () => {
    setTodos((todos) =>
      todos.map((t) => (t.id === todo.id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTodo = () => {
    setTodos((todos) => todos.filter((t) => t.id !== todo.id));
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = (e) => {
    setTodos((todos) =>
      todos.map((t) => (t.id === todo.id ? { ...t, text: editedText } : t))
    );
    setEdit(false);
  };

  return (
    <ListItem done={todo.done}>
      <DoneBtn done={todo.done} onClick={toggleTodo} />
      {edit ? (
        <input
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleSave}
        />
      ) : (
        <span onClick={handleEdit}>{todo.text}</span>
      )}
      <DelBtn onClick={deleteTodo}>×</DelBtn>
    </ListItem>
  );
});

export default TodoItem;

const ListItem = styled.li`
  word-break: break-all;
  display: flex;
  align-items: center;
  border: 1px solid #ffffff85;
  border-radius: 30px;
  margin-bottom: 13px;
  padding: 0 5px;
  background-color: #ffffff11;

  span,
  input {
    all: unset;
    padding: 5px 0;
    font-size: 17px;
    color: ${({ done }) => (done ? "#a3a3a3" : "white")};
    text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  }
`;

const DoneBtn = styled.button`
  all: unset;
  font-size: 25px;
  color: #ff3898;
  margin: 0 10px;
  padding-top: 1px;
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
  padding: 0 0 3px 8px;
  color: #29e678;
  font-size: 30px;
  text-shadow: 0px 0px 10px #ffffff;
  cursor: pointer;
  display: flex;

  &:hover {
    text-shadow: 0px 0px 13px #ff3898;
  }
`;
