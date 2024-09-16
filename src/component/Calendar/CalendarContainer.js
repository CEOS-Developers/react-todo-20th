import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import './custom-calendar.css'; // 커스텀 CSS 파일
import { getTodoProgressForDate } from '../../utils/localStorage';


function CalendarContainer({ onDateChange }) {
  const [date, setDate] = useState(new Date());

  const handleChange = (selectedDate) => {
    setDate(selectedDate);
    onDateChange(selectedDate); // 부모 컴포넌트로 선택된 날짜 전달
  };
  // 각 타일에 내용을 추가하는 함수
  const tileContent = ({ date, view }) => {
    if (view === 'month') { // 월간 뷰일 때만 표시
      const { completed, total } = getTodoProgressForDate(date); // 성취도 계산

      if (total > 0) { // 할 일이 있는 경우에만 표시
        return (
          <TodoProgress>
            {completed}/{total}
          </TodoProgress>
        );
      }
    }
    return null;
  };

  return (
    <>      
      <Wrapper>
        <Calendar
          locale='en-GB' // 영국 버전 -> 월요일부터 시작
          onChange={handleChange}
          value={date}
          tileContent={tileContent} // 타일 콘텐츠 추가
          showNeighboringMonth={true} // 이전 및 다음 달 날짜 표시
        />
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: white; /* 배경 색상 */
  border-radius: 28px;
  font-family: 'Arial', sans-serif;
`;
const TodoProgress = styled.div`
  position: absolute;
  top: 40px;
  font-size: 0.75rem;
  color: #666;
  margin-top: 5px;

`;
export default CalendarContainer;
