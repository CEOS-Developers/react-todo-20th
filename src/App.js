import React, { useState, useEffect } from "react";
import TodoDate from "./components/TodoDate";
import TodoContent from "./components/TodoContent";
import GlobalStyle from "./style/GlobalStyle";
import "./style/normalize.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const filteredTodos = storedTodos.filter((todo) => todo.date === date);
    setTodos(filteredTodos);
  }, [date]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const updatedTodos = [
      ...storedTodos.filter((todo) => todo.date !== date),
      ...todos,
    ];
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }, [todos, date]);

  return (
    <>
      <GlobalStyle />
      <TodoDate setDate={setDate} />
      <TodoContent todos={todos} setTodos={setTodos} date={date} />
    </>
  );
}

export default App;
