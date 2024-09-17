import { TodoItem } from './TodoItem';

export default function TodoList({ todos, setTodos }) {
  // 투두 수정
  const handleEdit = (id) => {
    console.log(`Edit todo with id: ${id}`);
  };

  // 투두 삭제
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            {...todo}
            onEdit={() => handleEdit(todo.id)}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}
