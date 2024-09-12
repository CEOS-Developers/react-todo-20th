import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";

export default function TodoBtn() {
  return <TodoBtnWrapper>+</TodoBtnWrapper>;
}

const TodoBtnWrapper = styled.button`
  ${rowFlex}
  position: fixed;
  right: 2rem;
  bottom: 2rem;

  width: 5rem;
  height: 5rem;

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.main_blue};
  border-radius: 50%;

  ${({ theme }) => theme.fonts.Headline1};
`;
