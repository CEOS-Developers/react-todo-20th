import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";
import { useTodoStore } from "../../core/store";
import PropTypes from "prop-types";

TodoInput.propTypes = {
  handleInput: PropTypes.func.isRequired,
};

export default function TodoInput({ handleInput }) {
  const setTodo = useTodoStore((state) => state.setTodoText);

  function onChange(event) {
    setTodo(event.target.value);
    handleInput(event.target.value);
  }

  return (
    <>
      <Input onChange={onChange} autoFocus type="text" placeholder="할 일" />
    </>
  );
}

const Input = styled.input`
  ${rowFlex};
  width: 90%;
  height: 3rem;
  margin: 1rem;

  ${({ theme }) => theme.fonts.Headline1};
  border: none;
  outline: none;
  caret-color: ${({ theme }) => theme.colors.main_blue};

  &::placeholder {
    ${({ theme }) => theme.fonts.Headline1};
    color: ${({ theme }) => theme.colors.gray2};
  }

  &:focus {
    caret-color: ${({ theme }) => theme.colors.main_blue};
  }
`;
