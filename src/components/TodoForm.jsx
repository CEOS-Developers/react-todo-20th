import React, { useState } from "react";
import styled from "styled-components";

// 투두 입력 폼
const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") {
      alert("할 일을 입력해주세요!");
      return;
    }
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="오늘 해야 할 일은?"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
    </Form>
  );
};

export default TodoForm;

const Form = styled.form`
  input {
    all: unset;
    box-sizing: border-box;
    width: 100%;
    padding: 15px 5px;
    border-bottom: 1px solid hsl(0, 0%, 100%);
    font-size: 18px;
    margin-bottom: 20px;
  }

  input:focus,
  input:hover {
    border-bottom: 1px solid #f854a3a2;
  }
`;
