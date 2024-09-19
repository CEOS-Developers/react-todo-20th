import { useCallback, useMemo } from 'react';
import { TodoItem } from './TodoItem';

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

  // 투두 수정
  const handleEdit = (id) => {
    console.log(`Edit todo with id: ${id}`);
  };

  // 투두 삭제
  const handleDelete = useCallback(
    (id) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    },
    [setTodos]
  );
  return (
    <div>
      <div>{title}</div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            {...todo}
            onEdit={() => handleEdit(todo.id)}
            onDelete={() => handleDelete(todo.id)}
            toggleComplete={() => toggleComplete(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}
