import React, { useState } from 'react';
import './App.css';
import CalendarContainer from './component/Calendar/CalendarContainer';
import Task from './component/Task/Task';

function App() {
  // 선택된 날짜 상태 -> Date 객체 정의
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  // 날짜 선택 핸들러
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsTaskModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsTaskModalOpen(false); // 모달 닫기
  };



  return (
    <>      
      <div className='container'>
        {/* Task가 보이는 상태면 달력을 숨기고, 그렇지 않으면 달력을 표시 */}
        {!isTaskModalOpen ? (
          <CalendarContainer onDateChange={handleDateChange} />
        ) : (
          <>
            <Task selectedDate={selectedDate} handleCloseModal={handleCloseModal} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
