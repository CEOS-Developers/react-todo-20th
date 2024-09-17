import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function Todo() {
  const [todos, setTodos] = useLocalStorage('todos', []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div>
      <TodoForm setTodos={setTodos} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}
