import styled from "styled-components";
import Header from "../components/Header/Header";
import DayofWeek from "../components/Date/DayofWeek";
import Days from "../components/Date/Days";
import TodoBtn from "../components/TodoBtn/TodoBtn";
import { useState } from "react";
import TodoModal from "../components/Modal/TodoModal";
import TodosList from "../components/Todos/TodosList";

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
      <TodosList />
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

const HeaderAndDayOfWeekWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  padding: 0 5rem;

  background-color: ${({ $isOpen, theme }) => {
    return $isOpen ? theme.colors.modal_background : theme.colors.gray3;
  }};
`;
