import { useState, useEffect } from 'react';
import styled from 'styled-components';

// 날짜
const days = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
];
const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();
const getDay = days[date.getDay()];

// Clock : 날짜 + 시간
export default function Clock() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <StyledClock>
      <p className="date">
        {month}월 {day}일 {getDay}
      </p>
      <p>{time.toLocaleTimeString()}</p>
    </StyledClock>
  );
}

const StyledClock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.7rem;
  color: rgb(220, 220, 220);
`;
