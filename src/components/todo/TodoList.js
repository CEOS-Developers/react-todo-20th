import { useCallback, useMemo } from 'react';
import { TodoItem } from './TodoItem';
import styled from 'styled-components';

export default function TodoList({ title, todos, setTodos }) {
  // 투두 토글 함수 :
  const toggleComplete = useCallback(
    (id) => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
      );
    },
    [setTodos]
  );

  // 투두 삭제
  const handleDelete = useCallback(
    (id) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    },
    [setTodos]
  );
  return (
    <div>
      <StyledListTitle>
        <span>{title}</span>
        <span className="count">{todos.length}</span>
      </StyledListTitle>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            {...todo}
            // onEdit={() => handleEdit(todo.id)}
            onDelete={() => handleDelete(todo.id)}
            toggleComplete={() => toggleComplete(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

const StyledListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  border-bottom: 1px solid var(--sub-color);
  .count {
    font-size: 1.5rem;
    color: var(--main-color);
  }
`;
