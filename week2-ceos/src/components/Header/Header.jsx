import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";
import { useStore } from "@core/store.js";

export default function Header() {
  const upDays = useStore((state) => state.increaseWeek);
  const downDays = useStore((state) => state.decreaseWeek);
  const headerText = useStore((state) => state.headerDay);

  return (
    <HeaderWrapper>
      <button onClick={downDays}>⬅️</button>
      {headerText}
      <button onClick={upDays}>➡️</button>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  ${rowFlex}
  padding: 5rem;
  ${({ theme }) => theme.fonts.Headline1};
  color: ${({ theme }) => theme.colors.black};
`;
