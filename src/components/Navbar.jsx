import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { S } from "./Common.style";

const Navbar = () => {
  // 현재 날짜, 시간 출력
  const [now, setNow] = useState(() => new Date());

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  useEffect(() => {
    const timeId = setInterval(() => setNow(new Date()), 1000);

    return () => clearInterval(timeId);
  }, []);

  return (
    <Wrapper>
      <Clock>{now.toLocaleString("ko-KR", options)}</Clock>
      <TopBox>
        <S.Ment>당신의 할 일을 작성해보세요 ✏️</S.Ment>
        <hr />
        <S.Ment>입력창 불러오기</S.Ment>
      </TopBox>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Clock = styled.div`
  align-self: flex-end;
  color: var(--light-blue);
  font-size: 0.938rem;
  font-weight: 300;
  margin: 0.67rem 0;
`;

const TopBox = styled(S.Box)`
  width: 100%;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  margin-bottom: 1.25rem;

  hr {
    width: 38%;
    height: 0.01rem;
    background-color: var(--blue);
    border: 0;
  }
`;
