import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const TodoListContainer = styled.section`
display: flex;
width: 80%;
flex-direction: column;
gap: 0.625rem;
`;

const TodoList = ({ todos, toggleTodoCompletion, deleteTodo }) => {
  return (
    <TodoListContainer>
      {todos.map(todo => (
        <TodoItem
          key={todo.text}
          todo={todo}
          toggleTodoCompletion={toggleTodoCompletion}
          deleteTodo={deleteTodo}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
