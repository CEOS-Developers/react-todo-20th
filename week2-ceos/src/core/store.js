import { create } from "zustand";
import { weekStart } from "@utils/data";
import { addDays, format, startOfDay, startOfWeek, subDays } from "date-fns";
import { headerDate } from "../utils/data";

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
