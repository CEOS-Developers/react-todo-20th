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
    align-items: center; /* 수직 정렬 */
    font-size: 1rem;
    color: rgb(94, 169, 139);
    animation: ${slideDown} 0.3s ease-out;
`;

const Input = styled.input`
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    appearance: none; /* 기본 체크박스 스타일 제거 */
    border-radius: 50%; /* 둥근 모양 */
    border: 2px solid rgb(94, 169, 139); /* 체크되지 않았을 때 테두리 */
    background-color: transparent; /* 기본 배경 투명 */

    &:checked{
    background-color: rgb(103, 219, 147); /* 체크 시 배경색 */
    border-color: rgb(103, 219, 147); /* 테두리도 배경색과 동일하게 */
    position: relative;
    }

    &:checked:before{
    content: '✓'; /* 체크 표시 */
    font-size: 1rem;
    color: white; /* 체크 표시 색상 */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); /* 중앙 정렬 */
    }
`;
const TodoSpan = styled.span`
  text-decoration: ${props => (props.$completed ? 'line-through' : 'none')};
  width: 70%;
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

const TodoItem = (({ todo, toggleTodoCompletion, deleteTodo }) => {
  return (
    <TodoItemContainer>
      <Input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodoCompletion(todo.text)}
      />
      {/* completed 속성을 styled-components 내부에서만 사용 */}
      <TodoSpan $completed={todo.completed ? 1 : 0}>{todo.text}</TodoSpan>
      <DeleteButton onClick={() => deleteTodo(todo.text)}>삭제</DeleteButton>
    </TodoItemContainer>
  );
});

export default TodoItem;
