import styled from "styled-components";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

TodosHeader.propTypes = {
  clickedDay: PropTypes.string.isRequired,
  todoList: PropTypes.array.isRequired,
};

export default function TodosHeader(props) {
  const { todoList, clickedDay } = props;
  const [filterTodoList, setFilteredTodoList] = useState([]);
  const [isDoneList, setIsDoneList] = useState([]);

  useEffect(() => {
    const filtered = todoList.filter((list) => list.day === clickedDay);
    if (filtered.length > 0) {
      setFilteredTodoList(filtered[0].todos);
    } else {
      setFilteredTodoList([]);
    }
  }, [todoList, clickedDay]);

  useEffect(() => {
    const isDone = filterTodoList.filter((item) => item.isDone === true);
    setIsDoneList(isDone.length);
  }, [filterTodoList, todoList, clickedDay]);

  return (
    <Wrapper>
      <HeaderText>{clickedDay}</HeaderText>

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
