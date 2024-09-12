// 로컬스토리지에서 투두리스트 가져오기
export const getTasksFromLocalStorage = (date) => {
    const tasks = localStorage.getItem(`tasks-${date}`);
    return tasks ? JSON.parse(tasks) : [];
  };
  
  // 로컬스토리지에 투두리스트 저장하기
  export const saveTasksToLocalStorage = (date, tasks) => {
    localStorage.setItem(`tasks-${date}`, JSON.stringify(tasks));
  };
  