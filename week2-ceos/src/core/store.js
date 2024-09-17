import { create } from "zustand";
import { weekStart } from "@utils/data";
import { addDays, format, startOfDay, startOfWeek, subDays } from "date-fns";
import { headerDate } from "../utils/data";
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

export const useClickedDayStore = create((set) => ({
  clickedDay: format(new Date(), "MM월 dd일 EEEE", { locale: ko }),
  setClickedDay: (day) => set({ clickedDay: day }),
  todoText: "",
  setTodoText: (todo) => set({ todoText: todo }),
  isDone: false,
  setIsDone: (status) => set({ isDone: status }),
  todoList: [],

  addTodo: () =>
    set((state) => {
      let newTodo = {
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
      };
    }),
}));
