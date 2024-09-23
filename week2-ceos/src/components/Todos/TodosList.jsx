/* eslint-disable react/prop-types */
import styled from "styled-components";
import { columnFlex } from "@styles/commonStyle";
import OneTodo from "./OneTodo";

//todolist
export default function TodosList(props) {
  const { filterTodoList, removeList, toggleIsDone, clickedDay } = props;

  return (
    <Wrapper>
      {filterTodoList.length > 0 &&
        filterTodoList.map((content) => {
          const { text, isDone, boxColor } = content;
          return (
            <OneTodo
              removeTodo={() => removeList(clickedDay, text)}
              boxColor={boxColor}
              text={text}
              isDone={isDone}
              key={text.length + Math.random()}
              toggleIsDone={toggleIsDone}
              clickedDay={clickedDay}
            />
          );
        })}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  ${columnFlex}
  ${({ theme }) => theme.fonts.Body5};
  width: 80%;
  margin: 2rem;
`;
