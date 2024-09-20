import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import ProgressBar from '../ProgressBar';

export default function Todo() {
  const [todos, setTodos] = useLocalStorage('todos', []);

  useEffect(() => {
    console.log(todos);
  });
  return (
    <>
      <ProgressBar todos={todos} />
      <TodoForm setTodos={setTodos} />

      <TodoContainer>
        <TodoList
          title="TODO"
          todos={todos.filter((todo) => !todo.isCompleted)}
          setTodos={setTodos}
        />
        <TodoList
          title="COMPLETED"
          todos={todos.filter((todo) => todo.isCompleted)}
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
