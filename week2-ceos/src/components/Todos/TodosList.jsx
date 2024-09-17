import { useClickedDayStore } from "../../core/store";
import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";
import OneTodo from "./OneTodo";
import { useEffect, useState } from "react";

export default function TodosList() {
  const choosedDate = useClickedDayStore((state) => state.clickedDay);
  const todosList = useClickedDayStore((state) => state.todoList);
  const [filterTodoList, setFilteredTodoList] = useState([]);

  useEffect(() => {
    const filtered = todosList.filter((list) => list.day === choosedDate);
    filtered.length > 0 && setFilteredTodoList(filtered[0].todos);
    console.log(filterTodoList);
  }, [filterTodoList, todosList, choosedDate]);
  console.log(filterTodoList);

  return (
    <Wrapper>
      {filterTodoList.length > 0 &&
        filterTodoList.map((content) => {
          const { text, isDone } = content;
          return <OneTodo text={text} isDone={isDone} key={text.length + Math.random()} />;
        })}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  ${rowFlex}
  height: 100%;
  margin: 2rem;
`;
