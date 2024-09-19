import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function Todo() {
  const [todos, setTodos] = useLocalStorage('todos', []);

  // 완료된 할 일의 개수
  const completedCount = useMemo(
    () => todos.filter((todo) => todo.isCompleted).length,
    [todos]
  );

  // 진행률 계산 (완료된 할 일의 수 / 전체 할 일 수)
  const progress = todos.length > 0 ? (completedCount / todos.length) * 100 : 0;

  useEffect(() => {
    console.log(todos);
  });
  return (
    <>
      <TodoForm setTodos={setTodos} />
      <div>
        <label htmlFor="todoProgress">진행률: {Math.round(progress)}%</label>
        <progress
          id="todoProgress"
          max={todos.length} // 전체 할 일 수
          value={completedCount} // 완료된 할 일 수
        >
          {Math.round(progress)}%
        </progress>
      </div>

      <TodoContainer>
        <TodoList
          title="TODO"
          todos={todos.filter((todo) => !todo.isCompleted)}
          setTodos={setTodos}
        />
        <TodoList
          title="완료"
          todos={todos.filter((todo) => todo.isCompleted)}
          setTodos={setTodos}
        />
      </TodoContainer>
    </>
  );
}

const TodoContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
