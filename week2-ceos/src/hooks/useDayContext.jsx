import { useState } from "react";
import { startOfWeek, addDays, subDays, format } from "date-fns";

export function useDayContext() {
  const newDate = new Date();
  const [weekStart, setWeekStart] = useState(startOfWeek(newDate));
  const [startDay, setStartDay] = useState(format(weekStart, "d"));
  const [headerDay, setHeaderDay] = useState(`${format(weekStart, "yyyy")}년 ${format(weekStart, "MM")}월`);

  const increaseWeek = () => {
    const oneWeekLater = addDays(weekStart, 7);
    setWeekStart(oneWeekLater);
    setStartDay(format(oneWeekLater, "d"));
    setHeaderDay(`${format(oneWeekLater, "yyyy")}년 ${format(oneWeekLater, "MM")}월`);
  };

  const decreaseWeek = () => {
    const oneWeekAgo = subDays(weekStart, 7);
    setWeekStart(oneWeekAgo);
    setStartDay(format(oneWeekAgo, "d"));
    setHeaderDay(`${format(oneWeekAgo, "yyyy")}년 ${format(oneWeekAgo, "MM")}월`);
  };

  return { weekStart, startDay, headerDay, increaseWeek, decreaseWeek };
}
