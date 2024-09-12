import React, { useState } from 'react';
import './App.css';
import CalendarContainer from './component/Calendar/CalendarContainer';
import Task from './component/Task/Task';

function App() {
  // 선택된 날짜 상태 -> Date 객체 정의
  const [selectedDate, setSelectedDate] = useState(new Date());

  // 날짜 선택 핸들러
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <>
      <div className="background-overlay"></div>
      
      <div className='container'>
        <CalendarContainer onDateChange={handleDateChange}/>
        <Task selectedDate={selectedDate}/>
      </div>
    </>
  );
}

export default App;
