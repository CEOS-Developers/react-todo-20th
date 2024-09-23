import styled from "styled-components";
import Header from "../components/Header/Header";
import DayofWeek from "../components/Date/DayofWeek";
import Days from "../components/Date/Days";
import TodoBtn from "../components/TodoBtn/TodoBtn";
import { useState } from "react";
import TodoModal from "../components/Modal/TodoModal";
import Todo from "../components/Todos/Todo";
import { useDayContext } from "../hooks/useDayContext";
import useTodoContext from "../hooks/useTodoContext";

export default function MainPage() {
  const [openModal, setOpenModal] = useState(false);
  const { weekStart, headerDay, increaseWeek, decreaseWeek } = useDayContext();
  const { clickedDay, setClickedDay, setTodoText, boxColor, setBoxColor, todoList, addTodo, removeTodo, toggleIsDone } =
    useTodoContext();

  function handleModal() {
    {
      openModal ? setOpenModal(false) : setOpenModal(true);
    }
  }

  return (
    <Wrapper $isOpen={openModal}>
      <Header headerDay={headerDay} increaseWeek={increaseWeek} decreaseWeek={decreaseWeek} />
      <HeaderAndDayOfWeekWrapper $isOpen={openModal}>
        <DayofWeek />
        <Days setClickedDay={setClickedDay} weekStart={weekStart} />
      </HeaderAndDayOfWeekWrapper>
      <TodoContainer>
        <Todo toggleIsDone={toggleIsDone} removeList={removeTodo} clickedDay={clickedDay} todoList={todoList} />
      </TodoContainer>

      {openModal && (
        <TodoModal
          clickedDay={clickedDay}
          setBoxColor={setBoxColor}
          setTodoText={setTodoText}
          addTodo={addTodo}
          handleModal={handleModal}
          boxColor={boxColor}
        />
      )}
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
