import styled from "styled-components";
import { rowFlex, columnFlex } from "@styles/commonStyle";
import { useClickedDayStore, useTodoInput } from "../../core/store";
import { format, parse } from "date-fns";
import { ko } from "date-fns/locale";
import { useState } from "react";

export default function ModalContent({ handleModal }) {
  const clickedDate = useClickedDayStore((state) => state.clickedDay);
  const todo = useTodoInput((state) => state.todoText);
  const setTodo = useTodoInput((state) => state.setTodoText);

  function onChange(event) {
    setTodo(event.target.value);
  }

  function onClickConfirmButton() {
    handleModal();
  }

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button onClick={handleModal}>❌</Button>
        <Button onClick={onClickConfirmButton}>✔️</Button>
      </ButtonWrapper>
      <TodoInput autoFocus type="text" placeholder="할 일" onChange={onChange} />
      <ClickedDateText>{clickedDate}</ClickedDateText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 85%;
  height: 80%;
  background-color: skyblue;
`;
const Button = styled.button`
  ${({ theme }) => theme.fonts.Body6};
  margin: 2rem;
  padding: 1rem;
`;

const ButtonWrapper = styled.div`
  ${rowFlex}
  justify-content: space-between;
`;

const TodoInput = styled.input`
  ${rowFlex};
  width: 90%;
  height: 3rem;
  margin: 1rem;

  ${({ theme }) => theme.fonts.Headline1};
  border: none;
  outline: none;
  caret-color: ${({ theme }) => theme.colors.main_blue};

  &::placeholder {
    ${({ theme }) => theme.fonts.Headline1};
    color: ${({ theme }) => theme.colors.gray2};
  }

  &:focus {
    caret-color: ${({ theme }) => theme.colors.main_blue};
  }
`;

const ClickedDateText = styled.span`
  ${({ theme }) => theme.fonts.Body5};
  margin: 1rem;
`;
