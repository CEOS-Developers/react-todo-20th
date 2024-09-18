import styled from "styled-components";
import Header from "../components/Header/Header";
import DayofWeek from "../components/Date/DayofWeek";
import Days from "../components/Date/Days";
import TodoBtn from "../components/TodoBtn/TodoBtn";
import { useState } from "react";
import TodoModal from "../components/Modal/TodoModal";
import Todo from "../components/Todos/Todo";

export default function MainPage() {
  const [openModal, setOpenModal] = useState(false);

  function handleModal() {
    {
      openModal ? setOpenModal(false) : setOpenModal(true);
    }
  }

  return (
    <Wrapper $isOpen={openModal}>
      <Header />
      <HeaderAndDayOfWeekWrapper $isOpen={openModal}>
        <DayofWeek />
        <Days />
      </HeaderAndDayOfWeekWrapper>
      <TodoContainer>
        <Todo />
      </TodoContainer>
      {openModal && <TodoModal handleModal={handleModal} />}
      <TodoBtn openModal={openModal} handleModal={handleModal} />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderAndDayOfWeekWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  height: 20%;
  padding: 0 5rem;

  background-color: ${({ $isOpen, theme }) => {
    return $isOpen ? theme.colors.modal_background : theme.colors.gray3;
  }};
`;
