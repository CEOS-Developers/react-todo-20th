import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import './custom-calendar.css'; // 커스텀 CSS 파일


function CalendarContainer({ onDateChange }) {
  const [date, setDate] = useState(new Date());

  const handleChange = (selectedDate) => {
    setDate(selectedDate);
    onDateChange(selectedDate); // 부모 컴포넌트로 선택된 날짜 전달
  };

  return (
    <>      
      <Wrapper>
        <Calendar
          locale='en-GB' // 영국 버전 -> 월요일부터 시작
          onChange={handleChange}
          value={date}
          showNeighboringMonth={true} // 이전 및 다음 달 날짜 표시
        />
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  box-sizing: border-box;
  width: 70%;
  height: 100%;
  margin: auto;
  background-color: white; /* 배경 색상 */
  border-radius: 10px;
  font-family: 'Arial', sans-serif;
`;
export default CalendarContainer;
