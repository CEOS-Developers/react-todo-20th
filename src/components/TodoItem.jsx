import React from "react";
import styled from "styled-components";
import checked from "../assets/checked.svg";
import unchecked from "../assets/unchecked.svg";
import deleteBtn from "../assets/deleteBtn.svg";

const TodoItem = ({ todo, date, onTodoChange }) => {
  const toggleTodoComplete = () => {
    onTodoChange(date, todo, false);
  };

  const deleteTodo = () => {
    onTodoChange(date, todo, true);
  };

  return (
    <TodoItemContainer>
      <Img 
        src={todo.completed ? checked : unchecked}
        onClick={toggleTodoComplete}
      />
      <TodoText completed={todo.completed}>{todo.text}</TodoText>
      <Img 
        src={deleteBtn}
        onClick={deleteTodo}
      />
    </TodoItemContainer>
  );
};

export default TodoItem;

const TodoItemContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #C0C0C0;
  margin: 5px 0;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const TodoText = styled.span`
  margin-left: 5%;
  width: 80%;
  color: ${(props) => (props.completed ? "#C0C0C0" : "#000000")};
`;