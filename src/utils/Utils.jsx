export const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString();
    const day = date.getDate().toString();
    return `${year}년 ${month}월 ${day}일`;
};

export const formatDay = (date) => {
    const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    return days[date.getDay()];
};

export const getTodoList = (date) => {
    const storedTodos = localStorage.getItem(date.toDateString());
    return storedTodos ? JSON.parse(storedTodos) : [];
};

export const saveTodoList = (date, todoList) => {
    localStorage.setItem(date.toDateString(), JSON.stringify(todoList));
};