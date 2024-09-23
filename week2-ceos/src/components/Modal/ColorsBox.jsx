/* eslint-disable react/prop-types */
import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";

export default function ColorsBox(props) {
  const { color, onClick, boxColor } = props;

  return (
    <Box onClick={onClick} $boxColor={color}>
      {boxColor === color && "🤍"}
    </Box>
  );
}

const Box = styled.button`
  ${rowFlex}
  width: 5rem;
  height: 4rem;
  background-color: ${({ $boxColor }) => $boxColor};
  border-radius: 10px;
`;
