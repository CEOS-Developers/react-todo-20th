import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";
import { useTodoStore } from "../../core/store";
import PropTypes from "prop-types";

ColorsBox.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function ColorsBox(props) {
  const { color, onClick } = props;
  const choosedColor = useTodoStore((state) => state.boxColor);

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
