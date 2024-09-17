import { useClickedDayStore } from "../../core/store";
import styled from "styled-components";
import { columnFlex } from "@styles/commonStyle";
import OneTodo from "./OneTodo";
import { useEffect, useState } from "react";

export default function TodosList() {
  const choosedDate = useClickedDayStore((state) => state.clickedDay);
  const todosList = useClickedDayStore((state) => state.todoList);
  const removeList = useClickedDayStore((state) => state.removeTodo);
  const [filterTodoList, setFilteredTodoList] = useState([]);

  useEffect(() => {
    const filtered = todosList.filter((list) => list.day === choosedDate);
    if (filtered.length > 0) {
      setFilteredTodoList(filtered[0].todos);
    } else {
      setFilteredTodoList([]);
    }
  }, [todosList, choosedDate]);

  return (
    <Wrapper>
      {filterTodoList.length > 0 &&
        filterTodoList.map((content) => {
          const { text, isDone, boxColor } = content;
          return (
            <OneTodo
              removeTodo={() => removeList(choosedDate, text)}
              boxColor={boxColor}
              text={text}
              isDone={isDone}
              key={text.length + Math.random()}
            />
          );
        })}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  ${columnFlex}
  ${({ theme }) => theme.fonts.Body5};
  margin: 2rem;
`;
