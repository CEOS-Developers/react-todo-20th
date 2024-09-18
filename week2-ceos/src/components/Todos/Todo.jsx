import { useEffect, useState } from "react";
import TodosList from "./TodosList";
import { useTodoStore } from "../../core/store";
import TodosHeader from "./TodosHeader";
import styled from "styled-components";

export default function Todo() {
  const clickedDate = useTodoStore((state) => state.clickedDay);
  const todosList = useTodoStore((state) => state.todoList);
  const [filterTodoList, setFilteredTodoList] = useState([]);

  useEffect(() => {
    const filtered = todosList.filter((list) => list.day === clickedDate);
    if (filtered.length > 0) {
      setFilteredTodoList(filtered[0].todos);
    } else {
      setFilteredTodoList([]);
    }
  }, [todosList, clickedDate]);

  return (
    <Wrapper>
      <TodosHeader />
      <TodosList choosedDate={clickedDate} filterTodoList={filterTodoList} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
