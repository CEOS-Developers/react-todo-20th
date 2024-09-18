import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";
import { useTodoStore } from "../../core/store";
import PropTypes from "prop-types";

OneTodo.propTypes = {
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  boxColor: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default function OneTodo(props) {
  const { text, isDone, boxColor, removeTodo } = props;
  const choosedDate = useTodoStore((state) => state.clickedDay);
  const handleIsDone = useTodoStore((state) => state.toggleIsDone);

  function handleCheck() {
    handleIsDone(choosedDate, text);
  }

  return (
    <>
      <Wrapper>
        <LabelTextWrapper>
          <CheckBoxLabel>
            <CheckBox checked={isDone} onChange={handleCheck} $boxColor={boxColor} type="checkbox" />
          </CheckBoxLabel>
          <DoneText $isDone={isDone}>{text}</DoneText>
        </LabelTextWrapper>
        <RemoveTodo onClick={removeTodo}>🗑️</RemoveTodo>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
`;

const LabelTextWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  margin-left: 1rem;
`;

const CheckBoxLabel = styled.label`
  ${rowFlex}
  width: 1.5rem;
  height: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
`;

const CheckBox = styled.input`
  ${rowFlex}
  cursor: pointer;

  width: 1.5rem;
  height: 1.5rem;

  appearance: none;
  border-radius: 5px;
  border: 1px solid ${({ $boxColor }) => $boxColor};

  &:checked {
    background-color: ${({ $boxColor }) => $boxColor};
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100% 100%;
    border-color: transparent;
  }
`;

const RemoveTodo = styled.button`
  ${rowFlex}
`;

const DoneText = styled.p`
  text-decoration: ${({ $isDone }) => $isDone && "line-through"};
`;
