import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { useEffect, useState } from "react";

export default function useTodoContext() {
  const [clickedDay, setClickedDay] = useState(format(new Date(), "MM월 dd일 EEEE", { locale: ko }));
  const [todoText, setTodoText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [boxColor, setBoxColor] = useState("#3FA9F5");
  const [todoList, setTodoList] = useState(() => {
    const savedList = localStorage.getItem("todoList");
    return savedList ? JSON.parse(savedList) : [];
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const removeTodo = (day, text) => {
    const updatedTodoList = todoList.map((item) => {
      if (item.day === day) {
        return {
          ...item,
          todos: item.todos.filter((todo) => todo.text !== text),
        };
      }
      return item;
    });
    setTodoList(updatedTodoList);
  };

  const toggleIsDone = (day, text) => {
    const updatedTodoList = todoList.map((item) => {
      if (item.day === day) {
        return {
          ...item,
          todos: item.todos.map((todo) => (todo.text === text ? { ...todo, isDone: !todo.isDone } : todo)),
        };
      }
      return item;
    });
    setTodoList(updatedTodoList);
  };

  const addTodo = () => {
    const newTodo = {
      boxColor,
      isDone,
      text: todoText,
    };

    const existingDayIndex = todoList.findIndex((item) => item.day === clickedDay);
    let updatedTodoList;

    // 이미 추가된 날짜가 있으면 해당 날짜에 추가
    if (existingDayIndex !== -1) {
      const updateTodos = [...todoList[existingDayIndex].todos, newTodo];
      updatedTodoList = [...todoList];
      updatedTodoList[existingDayIndex] = {
        ...updatedTodoList[existingDayIndex],
        todos: updateTodos,
      };
    } else {
      const oneDayTodo = {
        day: clickedDay,
        todos: [newTodo],
      };
      updatedTodoList = [...todoList, oneDayTodo];
    }

    // 상태 업데이트
    setTodoList(updatedTodoList);
    setTodoText("");
    setIsDone(false);
    setBoxColor("#3FA9F5");
  };

  return {
    clickedDay,
    setClickedDay,
    todoText,
    setTodoText,
    isDone,
    setIsDone,
    boxColor,
    setBoxColor,
    todoList,
    addTodo,
    removeTodo,
    toggleIsDone,
  };
}
