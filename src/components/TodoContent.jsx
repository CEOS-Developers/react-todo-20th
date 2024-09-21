import React, { useMemo } from "react";
import styled from "styled-components";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

// 전반적인 투두 내용 (입력 폼 + 각 li들)
const TodoContent = ({ todos, setTodos, date, setProgress }) => {
  const addTodo = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text, done: false, date: date },
    ]);
  };

  const todoCount = useMemo(() => {
    const doneCount = todos.filter((todo) => todo.done).length;
    const progress =
      todos.length === 0 ? 0 : Math.round((doneCount / todos.length) * 100); // 나중에 진행률 바에 표시할 때 너무 길어지면 안 되니까 반올림함
    setProgress(progress);

    return `${doneCount} / ${todos.length}`;
  }, [todos, setProgress]);

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
