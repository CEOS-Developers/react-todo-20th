import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";
import { useTodoStore } from "../../core/store";
import { colors } from "../../core/colors";
import ColorsBox from "./ColorsBox";
import { useState } from "react";
import PropTypes from "prop-types";
import TodoInput from "./TodoInput";

ModalContent.propTypes = {
  handleModal: PropTypes.func.isRequired,
};

export default function ModalContent({ handleModal }) {
  const clickedDate = useTodoStore((state) => state.clickedDay);
  const addNewTodo = useTodoStore((state) => state.addTodo);
  const setChoosedColor = useTodoStore((state) => state.setBoxColor);
  const [input, setInput] = useState("");

  function handleInput(data) {
    setInput(data);
  }

  function onClickConfirmButton() {
    if (input.length > 0) {
      handleModal();
      addNewTodo();
    } else {
      alert("할일을 입력해주세요");
    }
  }

  function onClickColorBox(color) {
    setChoosedColor(color);
  }

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button onClick={handleModal}>❌</Button>
        <Button onClick={onClickConfirmButton}>✔️</Button>
      </ButtonWrapper>
      <TodoInput handleInput={handleInput} />
      <ClickedDateText>{clickedDate}</ClickedDateText>
      <BoxWrapper>
        {colors.map((item) => {
          const { color } = item;
          return <ColorsBox onClick={() => onClickColorBox(color)} key={color} color={color} />;
        })}
      </BoxWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
`;
const Button = styled.button`
  ${({ theme }) => theme.fonts.Body6};
  margin: 1rem;
  padding: 1rem;
`;

const ButtonWrapper = styled.div`
  ${rowFlex}
  justify-content: space-between;
`;

const ClickedDateText = styled.span`
  ${({ theme }) => theme.fonts.Body5};
  margin: 1rem;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  margin-top: 2rem;
`;
