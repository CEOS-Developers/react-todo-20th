import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";
import { useStore } from "@core/store.js";

export default function Header() {
  const upDays = useStore((state) => state.increaseWeek);
  const downDays = useStore((state) => state.decreaseWeek);
  const headerText = useStore((state) => state.headerDay);

  return (
    <HeaderWrapper>
      <OtherWeekButton onClick={downDays}>⬅️</OtherWeekButton>
      {headerText}
      <OtherWeekButton onClick={upDays}>➡️</OtherWeekButton>
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
