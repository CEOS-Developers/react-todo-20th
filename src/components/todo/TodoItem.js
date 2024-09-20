import { IconButton, BlueButton, IsCompletedButton } from '../Button';
import styled from 'styled-components';

import { FaTrash } from 'react-icons/fa';
import { HiCheck } from 'react-icons/hi';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { IoCheckmarkCircle } from 'react-icons/io5';
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
  // min-width: 0; /* 긴 텍스트로 인해 박스가 커지는 문제를 방지 */
  // word-wrap: break-word; /* 텍스트가 넘치지 않도록 줄바꿈 */
  align-items: center;
  font-size: 14px;
  padding: 1rem;
  border-radius: 12px;
  background-color: rgb(37, 37, 37);
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
