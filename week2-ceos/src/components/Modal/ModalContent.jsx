import styled from "styled-components";
import { rowFlex, columnFlex } from "@styles/commonStyle";

export default function ModalContent({ handleModal }) {
  function onClickConfirmButton() {
    handleModal();
  }

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button onClick={handleModal}>❌</Button>
        <Button onClick={onClickConfirmButton}>✔️</Button>
      </ButtonWrapper>
      <TodoInput autoFocus type="text" placeholder="할 일" />
      <clickedDate />
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
  padding: 1rem;
  margin: 2rem;
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
