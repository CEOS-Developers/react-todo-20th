import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";

export default function OneTodo(props) {
  const { text, isDone, boxColor } = props;
  return (
    <>
      <Wrapper>
        <LabelTextWrapper>
          <CheckBoxLabel>
            <CheckBox $boxColor={boxColor} type="checkbox" />
          </CheckBoxLabel>
          {text}
          {boxColor}
        </LabelTextWrapper>
        <RemoveTodo>🗑️</RemoveTodo>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

const LabelTextWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
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
