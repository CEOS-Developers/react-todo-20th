import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const TodoListContainer = styled.section`
display: flex;
width: 80%;
flex-direction: column;
gap: 0.625rem;
 overflow-y: auto; /* 세로 방향으로만 스크롤 가능 */
 padding: 0.625rem;
/* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    width: 0;
}
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
