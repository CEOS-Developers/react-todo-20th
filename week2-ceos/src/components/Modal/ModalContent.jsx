import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";
import { useClickedDayStore } from "../../core/store";

export default function ModalContent({ handleModal }) {
  const clickedDate = useClickedDayStore((state) => state.clickedDay);
  const setTodo = useClickedDayStore((state) => state.setTodoText);
  const addNewTodo = useClickedDayStore((state) => state.addTodo);

  function onChange(event) {
    setTodo(event.target.value);
  }

  function onClickConfirmButton() {
    handleModal();
    addNewTodo();
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
