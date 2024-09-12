import { create } from "zustand";
import { weekStart } from "../utils/data";

const useStore = create((set) => ({
  startDay: weekStart,
  increaseWeek: () => set((state) => ({ startDay: state.startDay + 7 })),
  decreaseWeek: () => set((state) => ({ startDay: state.startDay - 7 })),
}));

export { useStore };
