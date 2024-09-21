import React from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import ProgressBar from "./ProgressBar";

const TodoCalendar = ({ setDate, progress }) => {
  const handleDateChange = (selectedDate) => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();
    const formattedDate = `${year}-${month}-${day}`;
    setDate(formattedDate);
  };

  return (
    <CalendarWrapper>
      <Calendar onChange={handleDateChange} />
      <ProgressBar progress={progress} />
    </CalendarWrapper>
  );
};

export default TodoCalendar;

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
