import { format, startOfWeek } from "date-fns";

const newDate = new Date();
const todayYear = newDate.getFullYear();
const todayMonth = newDate.getMonth() + 1;
const todayWeekDay = newDate.getDay();

const weekStart = startOfWeek(newDate);
const formattedWeekStart = format(weekStart, "d");

const headerDate = `${todayYear}년 ${todayMonth}월`;

export { headerDate, newDate, todayWeekDay, weekStart, formattedWeekStart };
