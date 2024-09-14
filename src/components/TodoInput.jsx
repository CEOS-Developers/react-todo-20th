import styled from "styled-components";
import { S } from "./Common.style";

const TodoInput = () => {
  return (
    <Wrapper>
      <S.Ment>What I have to do</S.Ment>
      <InputBox>
        <input />
        <EnterBtn>작성하기</EnterBtn>
      </InputBox>
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
  width: 50%;
  height: 1.875rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.625rem;
`;

const EnterBtn = styled.button`
  color: var(--light-blue);
  font-weight: 600;
  font-size: 0.938rem;
`;
