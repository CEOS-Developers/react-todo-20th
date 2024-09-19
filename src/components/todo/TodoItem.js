import { IconButton, BlueButton, IsCompletedButton } from '../Button';
import styled from 'styled-components';

import { FaTrash } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

export function TodoItem({
  id,
  value,
  isCompleted = false,
  onEdit,
  onDelete,
  toggleComplete,
}) {
  return (
    <StyledItem id={id}>
      <div className="todo">
        {isCompleted ? (
          <IsCompletedButton
            type="button"
            onClick={toggleComplete} // 완료로 상태 변경
            $isCompleted="true"
          ></IsCompletedButton>
        ) : (
          <IsCompletedButton
            type="button"
            onClick={toggleComplete} // 완료 취소
            $isCompleted="false"
          ></IsCompletedButton>
        )}
        <span>{value}</span>
      </div>
      <div className="button-group">
        <IconButton
          type="button"
          onClick={onEdit}
        >
          <MdEdit />
        </IconButton>
        <BlueButton
          type="button"
          onClick={onDelete}
        >
          <FaTrash />
        </BlueButton>
      </div>
    </StyledItem>
  );
}

const StyledItem = styled.li`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  padding: 1rem;
  border-radius: 12px;
  background-color: rgb(37, 37, 37);
  justify-content: space-between;

  .todo {
    display: flex;
    gap: 0.5rem;
    margin-right: auto;
    span {
      // padding: 1rem;
      margin: 1rem;
    }
  }
  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;
