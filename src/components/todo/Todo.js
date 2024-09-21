import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import ProgressBar from '../ProgressBar';

function Todo() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const memoizedTodos = useMemo(() => {
    return todos;
  }, [todos]);
  return (
    <>
      <ProgressBar todos={memoizedTodos} />
      <TodoForm setTodos={setTodos} />

      <TodoContainer>
        <TodoList
          title="TODO"
          todos={memoizedTodos.filter((todo) => !todo.isCompleted)}
          setTodos={setTodos}
        />
        <TodoList
          title="COMPLETED"
          todos={memoizedTodos.filter((todo) => todo.isCompleted)}
          setTodos={setTodos}
        />
      </TodoContainer>
    </>
  );
}

const TodoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export default React.memo(Todo);
