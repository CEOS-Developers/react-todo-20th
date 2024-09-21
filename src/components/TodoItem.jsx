import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const TodoItem = ({ id, isDone, content, date, onUpdate, removeTodo }) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      removeTodo(id);
    }, 300);
  };

  return (
    <TodoItemContainer isRemoving={isRemoving}>
      <Checkbox
        type="checkbox"
        id={id}
        checked={isDone}
        onChange={onChangeCheckbox}
      />
      <Content className={`content ${isDone ? "completed" : ""}`}>
        {content}
      </Content>
      <DateText>{new Date(date).toLocaleDateString()}</DateText>
      <DeleteButton onClick={handleRemove}>삭제</DeleteButton>
    </TodoItemContainer>
  );
};

// 할 일 추가 애니메이션
const slideDownFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 할 일 삭제 애니메이션
const fadeOutScaleDown = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9) translateY(+10px);
  }
`;

// prop이 DOM에 전달되지 않도록 함수형 props 필터링 적용
const TodoItemContainer = styled.div.attrs((props) => ({
  // 필터링할 props를 제외하고 styled-components에 전달
  isRemoving: undefined,
}))`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(240, 240, 240);
  animation: ${({ isRemoving }) =>
      isRemoving ? fadeOutScaleDown : slideDownFadeIn}
    0.3s ease-out forwards;
`;

const Checkbox = styled.input`
  width: 20px;
`;

const Content = styled.div`
  flex: 1;
  color: #788bff;
  word-break: break-word;

  &.completed {
    text-decoration: line-through;
    color: gray;
  }
`;

const DateText = styled.div`
  font-size: 14px;
  color: #8790ca;
`;

const DeleteButton = styled.button`
  cursor: pointer;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  background-color: #788bff;
`;

export default TodoItem;
