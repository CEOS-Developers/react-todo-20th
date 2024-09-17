import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";
import { useClickedDayStore } from "../../core/store";
import { colors } from "../../core/colors";
import ColorsBox from "./ColorsBox";
import { useState } from "react";

export default function ModalContent({ handleModal }) {
  const clickedDate = useClickedDayStore((state) => state.clickedDay);
  const setTodo = useClickedDayStore((state) => state.setTodoText);
  const addNewTodo = useClickedDayStore((state) => state.addTodo);
  const setChoosedColor = useClickedDayStore((state) => state.setBoxColor);
  const [input, setInput] = useState("");

  function onChange(event) {
    setTodo(event.target.value);
    setInput(event.target.value);
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
      <TodoInput autoFocus type="text" placeholder="할 일" onChange={onChange} />
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

const TodoInput = styled.input`
  ${rowFlex};
  width: 90%;
  height: 3rem;
  margin: 1rem;

  ${({ theme }) => theme.fonts.Headline1};
  border: none;
  outline: none;
  caret-color: ${({ theme }) => theme.colors.main_blue};

  &::placeholder {
    ${({ theme }) => theme.fonts.Headline1};
    color: ${({ theme }) => theme.colors.gray2};
  }

  &:focus {
    caret-color: ${({ theme }) => theme.colors.main_blue};
  }
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
