import styled from "styled-components";
import PropTypes from "prop-types";
import { useTodoStore } from "../../core/store";
import { useEffect, useState } from "react";

TodosHeader.propTypes = {
  clickedDate: PropTypes.string.isRequired,
};

export default function TodosHeader({ clickedDate }) {
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
    <>
      <HeaderText>{clickedDate}</HeaderText>

      {filterTodoList.length > 0 && (
        <span>
          {isDoneList}/{filterTodoList.length}
        </span>
      )}

      <DividedLine />
    </>
  );
}

const HeaderText = styled.p`
  ${({ theme }) => theme.fonts.Body1};
  margin-bottom: -2rem;
`;

const DividedLine = styled.hr`
  margin-top: -2rem;
  background-color: ${({ theme }) => theme.colors.gray3};
`;
