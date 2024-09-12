import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from '../../utils/localStorage';


function Task({ selectedDate }) {
    const [tasks, setTasks] = useState({});
    const [newTask, setNewTask] = useState('');

    // 선택된 날짜에 따른 투두리스트 불러오기
    useEffect(() => {
        const formattedDate = selectedDate.toISOString().split('T')[0]; // YYYY-MM-DD 형식
        const loadedTasks = getTasksFromLocalStorage(formattedDate);
        setTasks(loadedTasks);
    }, [selectedDate]);

    // 요일 풀네임 가져오기
    const getDayName = (date) => {
        return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
    };
    // 투두 추가 핸들러
    // const handleAddTodo = () => {
    //     if (newTask.trim() === '') return;
    //     const updatedTasks = [...tasks, { text: newTask, completed: false, completedTime: null }];
    //     setTasks(updatedTasks);
    //     saveTasksToLocalStorage(selectedDate.toISOString().split('T')[0], updatedTasks);
    //     setNewTask('');
    // };
    const handleAddTodo = () => {
        if (newTask.trim() === '') return;
        const formattedDate = selectedDate.toISOString().split('T')[0]; // YYYY-MM-DD 형식
        const taskId = `task-${new window.Date().now()}`; // 고유한 ID 생성
        const updatedTasks = {
          ...tasks,
          [taskId]: { text: newTask, completed: false, completedTime: null },
        };
        setTasks(updatedTasks);
        saveTasksToLocalStorage(formattedDate, updatedTasks);
        setNewTask('');
      };
    
    // 할일 완료 핸들러 -> window.Date() 사용 이유 : 앞선 부모 컴포넌트에서 Date 객체를 사용했기 때문에 window.Date()로 접근하여 재정의가 가능하도록 함. 
    // const handleCompleteTask = (index) => {
    //     const updatedTasks = tasks.map((task, i) => {
    //     if (i === index) {
    //         return {
    //         ...task,
    //         completed: !task.completed,
    //         completedTime: !task.completed ? new window.Date().toLocaleTimeString() : null,
    //         };
    //     }
    //     return task;
    //     });
    //     setTasks(updatedTasks);
    //     saveTasksToLocalStorage(selectedDate.toISOString().split('T')[0], updatedTasks);
    // };
    const handleCompleteTask = (taskId) => {
        const formattedDate = selectedDate.toISOString().split('T')[0]; // YYYY-MM-DD 형식
        const task = tasks[taskId]; // 키로 특정 task 접근
        if (task) {
          const updatedTask = {
            ...task,
            completed: !task.completed,
            completedTime: !task.completed ? new window.Date().toLocaleTimeString() : null,
          };
          const updatedTasks = { ...tasks, [taskId]: updatedTask }; // 업데이트된 task만 덮어쓰기
          setTasks(updatedTasks);
          saveTasksToLocalStorage(formattedDate, updatedTasks);
        }
      };
    



    return (
        <>      
            <Wrapper>
                <Date>
                    {getDayName(selectedDate)}, {selectedDate.getDate()}th
                </Date>
                <TaskList>
                    {Object.entries(tasks).map(([taskId, task]) => (
                        <TaskItem key={taskId}>
                            <input
                                type="radio"
                                checked={task.completed}
                                onChange={() => handleCompleteTask(taskId)}
                                style={{ accentColor: task.completed ? '#CD313A' : '#0047A0' }} // 빨간색/파란색 토글
                            />
                                <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                {task.text}
                                </p>
                                {task.completed && <span>{task.completedTime}</span>} {/* 완료 시간 표시 */}
                        </TaskItem>
                    ))}

                </TaskList>
                <AddTask>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Add a new task"
                    />
                    <button onClick={handleAddTodo}>Add Tasks</button>
                </AddTask>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    width: 30%;
    height: 100%;
`;

const Date = styled.div`
    width: 100%;
    height: 15%;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ccc;
`;
const TaskList = styled.div`
    padding: 0 10px;
    width: 100%;
    height: 70%;
    overflow-y: auto;
`;
const TaskItem = styled.article`
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const AddTask = styled.div`
    /* display: flex; */
    width: 100%;
    height: 15%;
    padding: 0 10px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
`;
export default Task;
