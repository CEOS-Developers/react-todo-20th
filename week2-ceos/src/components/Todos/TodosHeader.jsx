import styled from "styled-components";
import { useTodoStore } from "../../core/store";
import { useEffect, useState } from "react";

export default function TodosHeader() {
  const todosList = useTodoStore((state) => state.todoList);
  const choosedDate = useTodoStore((state) => state.clickedDay);
  const [filterTodoList, setFilteredTodoList] = useState([]);
  const [isDoneList, setIsDoneList] = useState([]);

  useEffect(() => {
    const filtered = todosList.filter((list) => list.day === choosedDate);
    if (filtered.length > 0) {
      setFilteredTodoList(filtered[0].todos);
    } else {
      setFilteredTodoList([]);
    }
  }, [todosList, choosedDate]);

  useEffect(() => {
    const isDone = filterTodoList.filter((item) => item.isDone === true);
    setIsDoneList(isDone.length);
  }, [filterTodoList, todosList, choosedDate]);

  return (
    <Wrapper>
      <HeaderText>{choosedDate}</HeaderText>

      {filterTodoList.length > 0 && (
        <span>
          {isDoneList}/{filterTodoList.length}
        </span>
      )}

      <DividedLine />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  width: 70%;
`;

const HeaderText = styled.p`
  ${({ theme }) => theme.fonts.Body1};
  margin-top: -3rem;
`;

const DividedLine = styled.hr`
  background-color: ${({ theme }) => theme.colors.gray3};
`;
