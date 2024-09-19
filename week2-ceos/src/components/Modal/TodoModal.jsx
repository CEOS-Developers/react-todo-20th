/* eslint-disable react/prop-types */
import styled, { keyframes } from "styled-components";
import { rowFlex } from "@styles/commonStyle";
import ModalContent from "./ModalContent";

export default function TodoModal(props) {
  const { handleModal, clickedDay, setBoxColor, setTodoText, addTodo, boxColor } = props;
  return (
    <ModalBackGround>
      <ModalWrapper>
        <ModalContent
          clickedDay={clickedDay}
          setBoxColor={setBoxColor}
          setTodoText={setTodoText}
          addTodo={addTodo}
          handleModal={handleModal}
          boxColor={boxColor}
        />
      </ModalWrapper>
    </ModalBackGround>
  );
}

const Slide = keyframes`
 from {
		transform: translate(0, 10rem);
    }
    to {
        transform: translate(0, 0rem);
    }
`;

const ModalWrapper = styled.aside`
  ${rowFlex}
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 40rem;

  background-color: ${({ theme }) => theme.colors.white};
  border-top-left-radius: 10%;
  border-top-right-radius: 10%;

  animation: ${Slide} 0.5s linear forwards;
`;

const ModalBackGround = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  background-color: rgb(0 0 0 / 30%);
`;
