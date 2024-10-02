import styled from 'styled-components';
import { DeleteButton, IsCompletedButton } from '../Button';
import { FaTrash } from 'react-icons/fa';
import { IoCheckmarkCircle } from 'react-icons/io5';

// 할 일 요소
export function TodoItem({
  id,
  value,
  isCompleted = false,
  onDelete,
  toggleComplete,
}) {
  return (
    <StyledItem id={id}>
      {isCompleted ? (
        <IsCompletedButton
          type="button"
          onClick={toggleComplete} // 완료로 상태 변경
          $isCompleted="true"
        >
          <IoCheckmarkCircle />
        </IsCompletedButton>
      ) : (
        <IsCompletedButton
          type="button"
          onClick={toggleComplete} // 완료 취소
          $isCompleted="false"
        ></IsCompletedButton>
      )}
      <div className="todo">{value}</div>
      <div className="button-group">
        <DeleteButton
          type="button"
          onClick={onDelete}
        >
          <FaTrash />
        </DeleteButton>
      </div>
    </StyledItem>
  );
}

const StyledItem = styled.li`
  margin-top: 12px;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  background-color: var(--bg-primary);
  justify-content: space-between;

  .todo {
    margin-right: auto;
    justify-content: center;
    span {
      margin: 1rem;
    }
  }
  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;
