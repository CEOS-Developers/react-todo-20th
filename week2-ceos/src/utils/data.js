const newDate = new Date();
const todayYear = newDate.getFullYear();
const todayMonth = newDate.getMonth() + 1;
const todayWeekDay = newDate.getDay();

export const headerDate = `${todayYear}년 ${todayMonth}월`;

export { todayWeekDay };
