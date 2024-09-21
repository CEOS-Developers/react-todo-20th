import React, { useMemo } from "react";
import styled from "styled-components";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoContent = ({ todos, setTodos, date }) => {
  const addTodo = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, done: false, date: date },
    ]);
  };

  const todoCount = useMemo(() => {
    const doneCount = todos.filter((todo) => todo.done).length;
    return `${doneCount} / ${todos.length}`;
  }, [todos]);

  const sortedTodos = useMemo(() => {
    return [...todos].sort((a, b) => a.done - b.done);
  }, [todos]);

  return (
    <Container>
      <Title>
        <h2>To-Do</h2>
        <div id="todo-count">{todoCount}</div>
      </Title>
      <TodoForm addTodo={addTodo} />
      <TodoList>
        {sortedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </TodoList>
    </Container>
  );
};

export default TodoContent;

const Container = styled.div`
  width: 40%;
  height: 70%;
  max-width: 550px;
  border: 0.3px solid #ff3898;
  background: #ffffff1a;
  box-shadow: 0 0 70px #691940;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  padding: 40px 30px 40px 40px;
  animation: fadeInUp 1s ease forwards;
`;

const Title = styled.div`
  padding: 0 10px 20px 0;
  display: flex;
  justify-content: space-between;

  h2 {
    color: #24d46d;
    font-size: 50px;
    font-weight: 800;
    margin: 0;
    text-shadow: 0px 0px 10px #24d46d;
  }

  #todo-count {
    color: #24d46d;
    font-size: 50px;
    font-weight: 800;
    margin: 0;
    text-shadow: 0px 0px 10px #24d46d;
  }
`;

const TodoList = styled.ul`
  overflow: auto;
  list-style: none;
  margin: 0;
  padding: 0 10px 0 0;
  animation: fadeInDown 1.5s ease forwards;
`;
