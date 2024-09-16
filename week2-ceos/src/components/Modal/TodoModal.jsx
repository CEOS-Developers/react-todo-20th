import styled, { keyframes } from "styled-components";
import { rowFlex, columnFlex } from "@styles/commonStyle";

export default function TodoModal() {
  return (
    <ModalBackGround>
      <ModalWrapper>
        <ModalCloseButton>❌</ModalCloseButton>
        <TodoInput autoFocus type="text" placeholder="할 일" />
        <clickedDate />
      </ModalWrapper>
    </ModalBackGround>
  );
}

const ModalCloseButton = styled.button`
  ${rowFlex}
  ${({ theme }) => theme.fonts.Body6};
`;

const TodoInput = styled.input`
  ${rowFlex};
  width: 100%;
  height: 3rem;

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

const Slide = keyframes`
 from {
		transform: translate(0, 10rem);
    }
    to {
        transform: translate(0, 0rem);
    }
`;

const ModalWrapper = styled.aside`
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 40rem;
  padding: 2rem;

  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 10%;
  border-top-right-radius: 10%;

  animation: ${Slide} 0.5s linear forwards;
`;

const ModalBackGround = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  background-color: rgb(0 0 0 / 30%);
`;
