/* eslint-disable react/prop-types */
import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";

export default function TodoInput(props) {
  const { handleInput, inputRef } = props;

  function onChange(event) {
    handleInput(event.target.value);
  }

  return (
    <>
      <Input ref={inputRef} onChange={onChange} autoFocus type="text" placeholder="할 일" />
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
