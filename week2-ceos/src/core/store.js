import { create } from "zustand";
import { weekStart } from "@utils/data";
import { addDays, format, startOfDay, startOfWeek, subDays } from "date-fns";

const newDate = new Date();

export const useStore = create((set) => ({
  weekStart: startOfWeek(newDate),
  startDay: format(weekStart, "d"),

  increaseWeek: () =>
    set((state) => {
      const oneWeekLater = addDays(state.weekStart, 7);
      return {
        weekStart: oneWeekLater,
        startDay: format(oneWeekLater, "d"),
      };
    }),

  decreaseWeek: () =>
    set((state) => {
      const oneWeekAgo = subDays(state.weekStart, 7);
      return {
        weekStart: oneWeekAgo,
        startDay: format(oneWeekAgo, "d"),
      };
    }),
}));

// export const useTestStore = create((set) => ({
//   count: 0,
//   increase: () => set((state) => ({ count: state.count + 1 })),
//   decrease: () => set((state) => ({ count: state.count - 1 })),
// }));
