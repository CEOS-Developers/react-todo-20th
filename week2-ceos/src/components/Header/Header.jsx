import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";
import { headerDate } from "../../utils/data";
import { useStore } from "zustand";

export default function Header() {
  const newWeek = useStore((state) => state.increaseWeek);
  const pastWeek = useStore((state) => state.decreaseWeek);

  return (
    <HeaderWrapper>
      <OtherWeekButton onClick={pastWeek}>⬅️</OtherWeekButton>
      {headerDate}
      <OtherWeekButton onClick={newWeek}>➡️</OtherWeekButton>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  ${rowFlex}
  padding: 5rem;
  ${({ theme }) => theme.fonts.Headline1};
  color: ${({ theme }) => theme.colors.black};
`;

const OtherWeekButton = styled.button``;
