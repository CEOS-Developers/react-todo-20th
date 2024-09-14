import styled from "styled-components";
import { S } from "./Common.style";
import { useCallback, useState, useRef } from "react";

const TodoInput = ({ todos, setTodos }) => {
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

  const nextId = useRef(1);
  const addItem = useCallback(
    (text) => {
      const item = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(item));
      nextId.current++;
    },
    [todos]
  );

  return (
    <Wrapper>
      <S.Ment>What I have to do</S.Ment>
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InputBox = styled(S.Box)`
  /* width: 50%; */
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
