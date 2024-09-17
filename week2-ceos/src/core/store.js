import { create } from "zustand";
import { weekStart } from "@utils/data";
import { addDays, format, startOfWeek, subDays } from "date-fns";
import { ko } from "date-fns/locale";

const newDate = new Date();

export const useStore = create((set) => ({
  weekStart: startOfWeek(newDate),
  startDay: format(weekStart, "d"),
  headerDay: `${format(weekStart, "yyyy")}년 ${format(weekStart, "MM")}월`,

  increaseWeek: () =>
    set((state) => {
      const oneWeekLater = addDays(state.weekStart, 7);
      return {
        weekStart: oneWeekLater,
        startDay: format(oneWeekLater, "d"),
        headerDay: `${format(oneWeekLater, "yyyy")}년 ${format(oneWeekLater, "MM")}월`,
      };
    }),

  decreaseWeek: () =>
    set((state) => {
      const oneWeekAgo = subDays(state.weekStart, 7);
      return {
        weekStart: oneWeekAgo,
        startDay: format(oneWeekAgo, "d"),
        headerDay: `${format(oneWeekAgo, "yyyy")}년 ${format(oneWeekAgo, "MM")}월`,
      };
    }),
}));

export const useTodoStore = create((set) => ({
  clickedDay: format(new Date(), "MM월 dd일 EEEE", { locale: ko }),
  setClickedDay: (day) => set({ clickedDay: day }),
  todoText: "",
  setTodoText: (todo) => set({ todoText: todo }),
  isDone: false,
  setIsDone: () =>
    set((state) => ({
      isDone: !state.isDone,
    })),
  todoList: [],
  boxColor: "#3FA9F5",
  setBoxColor: (color) => set({ boxColor: color }),

  removeTodo: (day, text) =>
    set((state) => {
      const updatedTodoList = state.todoList.map((item) => {
        if (item.day === day) {
          return {
            ...item,
            todos: item.todos.filter((todo) => todo.text !== text),
          };
        }
        return item;
      });
      return { todoList: updatedTodoList };
    }),

  toogleIsDone: (day, text) =>
    set((state) => {
      const updatedTodoList = state.todoList.map((item) => {
        if (item.day === day) {
          return {
            ...item,
            todos: item.todos.map((todo) => (todo.text === text ? { ...todo, isDone: !todo.isDone } : todo)),
          };
        }
        return item;
      });
      return { todoList: updatedTodoList };
    }),

  addTodo: () =>
    set((state) => {
      let newTodo = {
        boxColor: state.boxColor,
        isDone: state.isDone,
        text: state.todoText,
      };

      const existingDayIndex = state.todoList.findIndex((item) => item.day === state.clickedDay);

      let updatedTodoList;

      //이미 추가된 날짜라면..? 헷갈려 ㅠㅠ
      if (existingDayIndex !== -1) {
        const updateTodos = [...state.todoList[existingDayIndex].todos, newTodo];
        updatedTodoList = [...state.todoList];
        updatedTodoList[existingDayIndex] = {
          ...updatedTodoList[existingDayIndex],
          todos: updateTodos,
        };
      } else {
        const oneDayTodo = {
          day: state.clickedDay,
          todos: [newTodo],
        };
        updatedTodoList = [...state.todoList, oneDayTodo];
      }

      return {
        todoList: updatedTodoList,
        todoText: "",
        isDone: false,
        boxColor: "#3FA9F5",
      };
    }),
}));
