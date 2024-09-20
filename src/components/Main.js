import React from 'react';
import styled from 'styled-components';
import InputForm from './InputForm';
import TodoList from './TodoList';

const MainContainer = styled.main`
  display: flex;
  margin-top: 1.875rem;
  padding-top: 0.9375rem;
  max-width: 90%;
  width: 50rem;
  height: 80vh;
  gap: 0.625rem;
  flex-direction: column;
  align-items: center;
  border-radius: 1.875rem;
  box-shadow: 0 0.625rem 1.25rem rgba(0,0,0,0.19), 0 0.375rem 0.375rem rgba(0,0,0,0.23);
`;

const DateContainer = styled.section`
  display: flex;
  gap: 0.3125rem;
  flex-direction: column;
  align-items: center;
  color: rgba(84, 170, 84, 0.922);
`;

const TodoCountContainer = styled.section`
  display: flex;
  gap: 0.625rem;
  color: rgba(84, 170, 84, 0.922);
`;

const Main = React.memo(({ addTodo, todos, toggleTodoCompletion, deleteTodo, totalTodos, completedTodos }) => {
  const DateDisplay = React.memo(() => {
    const today = new Date();
    const monthAndDay = today.toLocaleDateString("ko-KR",  { month: "long", day: "numeric" });
    const week = today.toLocaleDateString("en-US",  { weekday: "long" });
    return (
      <DateContainer>
        <h2>🍀{monthAndDay}🍀</h2>
        <p>{week}</p>
      </DateContainer>
    );
  });  

  return (
    <MainContainer>
      <DateDisplay />
      <TodoCountContainer>
        <span>✅: {totalTodos}</span>
        <span>🥳: {completedTodos}</span>
      </TodoCountContainer>
      <InputForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodoCompletion={toggleTodoCompletion}
        deleteTodo={deleteTodo}
      />
    </MainContainer>
  );
});

export default Main;
