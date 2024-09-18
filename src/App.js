import React, { useState } from "react";
import styled from "styled-components";
import Calendar from './components/Calendar';
import TodoListComponent from './components/TodoListComponent';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <Container>
      <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate}/>
      <TodoListComponent currentDate={currentDate} setCurrentDate={setCurrentDate}/>
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
