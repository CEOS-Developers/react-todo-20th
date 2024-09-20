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

const TodoList = React.memo(({ todos, toggleTodoCompletion, deleteTodo }) => {
  // todos 배열을 completed 속성에 따라 정렬.
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1; // 완료된 항목을 맨 아래로 보내기
  });

  return (
    <TodoListContainer>
      {sortedTodos.map(todo => (
        <TodoItem
          key={todo.timestamp}
          todo={todo}
          toggleTodoCompletion={toggleTodoCompletion}
          deleteTodo={deleteTodo}
        />
      ))}
    </TodoListContainer> // sortedTodos 배열의 각 요소를 TodoItem 컴포넌트로 변환하여 나열(렌더링)
  );
});

export default TodoList;
