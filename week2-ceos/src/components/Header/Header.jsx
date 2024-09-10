import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";
import { headerDate } from "../../utils/data";

export default function Header() {
  return <HeaderWrapper>{headerDate}</HeaderWrapper>;
}

const HeaderWrapper = styled.header`
  ${rowFlex}

  ${({ theme }) => theme.fonts.Headline1};
`;
