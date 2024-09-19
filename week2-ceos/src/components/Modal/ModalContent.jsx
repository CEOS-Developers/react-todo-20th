/* eslint-disable react/prop-types */
import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";
import { colors } from "../../core/colors";
import ColorsBox from "./ColorsBox";
import { useRef } from "react";
import TodoInput from "./TodoInput";

export default function ModalContent(props) {
  const { clickedDay, addTodo, setBoxColor, handleModal, setTodoText, boxColor } = props;
  const inputRef = useRef();

  function handleInput(data) {
    setTodoText(data);
  }

  function onClickConfirmButton() {
    if (inputRef.current.value.length > 0) {
      handleModal();
      addTodo();
    } else {
      alert("할일을 입력해주세요");
    }
  }

  function onClickColorBox(color) {
    setBoxColor(color);
  }

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button onClick={handleModal}>❌</Button>
        <Button onClick={onClickConfirmButton}>✔️</Button>
      </ButtonWrapper>
      <TodoInput inputRef={inputRef} setTodoText={setTodoText} handleInput={handleInput} />
      <ClickedDateText>{clickedDay}</ClickedDateText>
      <BoxWrapper>
        {colors.map((item) => {
          const { color } = item;
          return <ColorsBox boxColor={boxColor} onClick={() => onClickColorBox(color)} key={color} color={color} />;
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
