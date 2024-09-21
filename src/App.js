import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoDate from "./components/TodoDate";
import TodoContent from "./components/TodoContent";
import GlobalStyle from "./style/GlobalStyle";
import "./style/normalize.css";
import TodoCalendar from "./components/TodoCalendar";

function App() {
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState("");
  const [progress, setProgress] = useState(0);
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const formattedToday = `${year}-${month}-${day}`;
    setDate(formattedToday);
  }, []);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const getTodosForDate = (todos, date) => {
    return todos.filter((todo) => todo.date === date);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <>
      <GlobalStyle />
      <TodoDate date={date} />
      <TodoContainer>
        <TodoContent
          todos={getTodosForDate(todos, date)}
          setTodos={setTodos}
          date={date}
          setProgress={setProgress}
        />
        {showCalendar && <TodoCalendar setDate={setDate} progress={progress} />}
      </TodoContainer>
      <FloatingButton onClick={toggleCalendar}>📅</FloatingButton>
    </>
  );
}

export default App;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
  column-gap: 40px;
`;

const FloatingButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ff3898;
  color: white;
  font-size: 24px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;
