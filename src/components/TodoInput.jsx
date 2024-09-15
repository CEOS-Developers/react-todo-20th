import styled from "styled-components";
import { S } from "./Common.style";
import { useCallback, useState, useRef } from "react";

const TodoInput = ({ addItem }) => {
  const [inputValue, setInputValue] = useState(""); // 입력값

  const handleChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      addItem(inputValue);
      setInputValue(""); // 입력창 초기화
      e.preventDefault();
    },
    [inputValue]
  );

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <InputBox>
          <input type="text" value={inputValue} onChange={handleChange} />
          <EnterButton type="submit">작성하기</EnterButton>
        </InputBox>
      </form>
    </Wrapper>
  );
};

export default TodoInput;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const InputBox = styled(S.Box)`
  width: 100%;
  height: 1.875rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.625rem;
`;

const EnterButton = styled.button`
  color: var(--light-blue);
  font-weight: 600;
  font-size: 0.938rem;
`;
