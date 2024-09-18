import { useTodoStore } from "../../core/store";
import styled from "styled-components";
import { columnFlex } from "@styles/commonStyle";
import OneTodo from "./OneTodo";
import PropTypes from "prop-types";

TodosList.propTypes = {
  choosedDate: PropTypes.string.isRequired,
  filterTodoList: PropTypes.array.isRequired,
};

export default function TodosList(props) {
  const { choosedDate, filterTodoList } = props;
  const removeList = useTodoStore((state) => state.removeTodo);

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
  width: 80%;
  margin: 2rem;
`;
