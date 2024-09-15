import styled, { css, keyframes } from "styled-components";
import { S } from "./Common.style";
import { useCallback, useState, useRef, useEffect } from "react";

const TodoInput = ({ isFormOpen, animationClassname, addItem }) => {
  const [inputValue, setInputValue] = useState(""); // 입력값
  const [isVisible, setIsVisible] = useState(isFormOpen);

  useEffect(() => {
    if (isFormOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isFormOpen]);

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
    <Wrapper className={animationClassname}>
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

const slideDownFadeIn = keyframes`
  from{
    opacity: 0;
    transform: translateY(-1.25rem);
  }
  to{
    opacity: 1;
    transform: translateY(0); 
  }
`;

const slideUpFadeOut = keyframes`
  from{
    opacity: 1;
    transform: translateY(0); 
  }
  to{
    opacity: 0;
    transform: translateY(-1.25rem);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;

  &.fade-in {
    animation: ${slideDownFadeIn} 0.3s ease-out forwards;
  }

  &.fade-out {
    animation: ${slideUpFadeOut} 0.3s ease-out forwards;
  }
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
