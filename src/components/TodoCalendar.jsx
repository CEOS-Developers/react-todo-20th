import React from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

const TodoCalendar = ({ setDate, setShowCalendar }) => {
  const handleDateChange = (selectedDate) => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();
    const formattedDate = `${year}-${month}-${day}`;
    setDate(formattedDate);
  };

  return <Calendar onChange={handleDateChange} />;
};

export default TodoCalendar;
