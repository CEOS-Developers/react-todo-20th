import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TodoItemContainer = styled.li`
    display: flex;
    width: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.11), 0 5px 5px rgba(0, 0, 0, 0.178);
    padding: 1rem 1.3rem 1rem 1rem;
    font-size: 1rem;
    color: white;
    border: none;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    color: rgb(94, 169, 139);
    animation: ${slideDown} 0.3s ease-out;
`;

const Input = styled.input`
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    appearance: none;
    border-radius: 50%;
    border: 2px solid rgb(94, 169, 139);
    background-color: transparent;

    &:checked {
        background-color: rgb(103, 219, 147);
        border-color: rgb(103, 219, 147);
        position: relative;
    }

    &:checked:before {
        content: '✓';
        font-size: 1rem;
        color: white;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`;

const TodoSpan = styled.span`
  text-decoration: ${props => (props.$completed ? 'line-through' : 'none')};
  width: 80%;
  overflow-wrap: break-word;
`;

const DeleteButton = styled.button`
    color: rgba(209, 46, 46, 0.664);
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
    background-color: transparent;
    border: 1.5px solid rgba(193, 49, 49, 0.664);

  &:hover {
    background-color: #b5b6b779;
    font-weight: bold;
  }
`;

const TodoItem = React.memo(({ todo, toggleTodoCompletion, deleteTodo }) => {
  return (
    <TodoItemContainer>
      <Input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodoCompletion(todo.text)}
      />
      <TodoSpan $completed={todo.completed}>{todo.text}</TodoSpan>
      <DeleteButton onClick={() => deleteTodo(todo.text)}>삭제</DeleteButton>
    </TodoItemContainer>
  );
});

export default TodoItem; // 여기에 todo checkbox가 있으니 직접적으로 todo의 완료 '상태'를 변경함.

