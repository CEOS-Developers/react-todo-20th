import React, { useState } from "react";
import styled from "styled-components";
import Calendar from './components/Calendar';
import TodoListComponent from './components/TodoListComponent';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDateChange = (date) => {
    setCurrentDate(date);
  ;}

  return (
    <Container>
      <Calendar currentDate={currentDate} onDateChange={handleDateChange}/>
      <TodoListComponent currentDate={currentDate}/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
  min-width: 550px;
  max-width: 650px;
  margin: 0 auto;
`
