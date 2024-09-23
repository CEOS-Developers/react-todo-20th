/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import TodosList from "./TodosList";
import TodosHeader from "./TodosHeader";
import styled from "styled-components";

export default function Todo(props) {
  const { clickedDay, todoList, removeList, toggleIsDone } = props;
  const [filterTodoList, setFilteredTodoList] = useState([]);

  useEffect(() => {
    const filtered = todoList.filter((list) => list.day === clickedDay);
    if (filtered.length > 0) {
      setFilteredTodoList(filtered[0].todos);
    } else {
      setFilteredTodoList([]);
    }
  }, [todoList, clickedDay]);

  return (
    <Wrapper>
      <TodosHeader clickedDay={clickedDay} todoList={todoList} />
      <TodosList
        toggleIsDone={toggleIsDone}
        removeList={removeList}
        clickedDay={clickedDay}
        filterTodoList={filterTodoList}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
