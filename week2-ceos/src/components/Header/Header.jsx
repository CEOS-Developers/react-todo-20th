/* eslint-disable react/prop-types */
import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";

export default function Header(props) {
  const { headerDay, increaseWeek, decreaseWeek } = props;

  return (
    <HeaderWrapper>
      <button onClick={decreaseWeek}>⬅️</button>
      {headerDay}
      <button onClick={increaseWeek}>➡️</button>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  ${rowFlex}
  padding: 5rem;
  ${({ theme }) => theme.fonts.Headline1};
  color: ${({ theme }) => theme.colors.black};
`;
