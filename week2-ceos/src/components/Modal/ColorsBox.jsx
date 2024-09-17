import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";
import { useClickedDayStore } from "../../core/store";
export default function ColorsBox(props) {
  const { color, onClick } = props;
  const choosedColor = useClickedDayStore((state) => state.boxColor);

  return (
    <Box onClick={onClick} $boxColor={color}>
      {choosedColor === color && "🤍"}
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
