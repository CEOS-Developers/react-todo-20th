import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import './custom-calendar.css'; // 커스텀 CSS 파일
import { getTodoProgressForDate } from '../../utils/LocalStorage';


function CalendarContainer({ onDateChange }) {
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(date.getMonth());

  const handleChange = (selectedDate) => {
    setDate(selectedDate);
    onDateChange(selectedDate); // 부모 컴포넌트로 선택된 날짜 전달
  };
  // 월 변경 핸들러
  const handleMonthChange = (e) => {
    const selectedMonth = parseInt(e.target.value);
    const newDate = new Date(date.getFullYear(), selectedMonth, 1);
    setDate(newDate);
    setMonth(selectedMonth);
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

  // 특정 조건에 따라 날짜에 클래스 이름을 할당하는 함수
  const getTileClassName = ({ date, view }) => {
    if (view === 'month') {
      const { completed, total } = getTodoProgressForDate(date); // 성취도 계산
      if (date === new Date().toISOString().split('T')[0]) {
        return 'today'; // 오늘 날짜를 하이라이트
        } else if (completed === total && completed > 0 && total > 0) {
          return 'great'; // 모든 할 일이 완료된 경우
      } else if (completed !== total && total > 0) {
        return 'sorry'; // 할 일이 없는 경우
      } else if (completed === 0 && total === 0) {
        return 'none'; // 할 일이 없는 경우
      }
    }
    return null;
  };

  return (
    <>      
      <Wrapper>
        <CustomHeader>
          <ColorBox>
            <span className='today'>Today</span>
            <span className='great'>Great</span>
            <span className='sorry'>Sorry</span>
          </ColorBox>
          <Title>
            <h2>To Do Calendar</h2>
            <span>({date.toISOString().split('T')[0]})</span>
          </Title>
          <SelectMonth value={month} onChange={handleMonthChange}>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i}>
                {new Date(0, i).toLocaleString('en-US', { month: 'long' })} {/* 월 이름 표시 */}
              </option>
            ))}
          </SelectMonth>
        </CustomHeader>
        <Calendar
          locale='en-GB' // 영국 버전 -> 월요일부터 시작
          onChange={handleChange}
          value={date}
          tileContent={tileContent} // 타일 콘텐츠 추가
          tileClassName={getTileClassName} // tileClassName 속성 사용
          showNeighboringMonth={true} // 이전 및 다음 달 날짜 표시
          showNavigation={false}  // 기본 네비게이션 숨기기

        />
      </Wrapper>
    </>
  );
            }
const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: white; /* 배경 색상 */
  border-radius: 28px;
  padding: 20px;
`;
const TodoProgress = styled.div`
  position: absolute;
  top: 40px;
  font-size: 0.75rem;
  color: #666;
  margin-top: 5px;

`;
const CustomHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10%;
  margin-top: 10px;
  margin-bottom: 10px;
  
`;
const ColorBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  span {
    width: 50px;
    height: 20px;
    border-radius: 10px;
    padding: 5px;
    text-align: center;
    font-size: 0.75rem;
    color: white;
  }
  @media (max-width: 768px) {
    span {
      width: 35px;
      height: 15px;
      font-size: 0.5rem;

    }
  }
  .today {
    background-color: #FF8200;
  }
  .great {
    background-color: #32AAFF;
  }
  .sorry {
    background-color: #FF5A5A;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-family: "Sofadi One", system-ui;
  font-weight: 400;
  font-style: normal;
  color: rgb(62, 76, 247);
  h2 {
    font-size: 1.5rem;
    margin: 0;
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  span {
    font-size: 0.75rem;
    @media (max-width: 768px) {
      font-size: 0.6rem;
    }
  }
`;

const SelectMonth = styled.select`
  padding: 5px;
  font-size: 1rem;
  border: none;
  color: rgb(62, 76, 247);
  background-color: transparent;
  box-shadow: inset 0 -1px 0 0 rgb(62, 76, 247);
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export default CalendarContainer;
