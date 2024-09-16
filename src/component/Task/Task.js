import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // 고유 ID 생성을 위해 uuid 사용
import styled from 'styled-components';
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from '../../utils/localStorage';
import { CalendarDays, CircleX, CopyPlus, Pencil, Plus, Undo2, X } from 'lucide-react';
import PendingTask from './components/PendingTask';
import CompletedTask from './components/CompletedTask';
import TabIndicator from './components/TabIndicator';


function Task({ selectedDate, handleCloseModal }) {
    const [tasks, setTasks] = useState(new Map()); // 해시맵 구조로 tasks를 관리
    const [newTask, setNewTask] = useState('');
    const [addModal, setAddModal] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    // 요일 풀네임 가져오기
    const getDayName = (date) => {
        return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
    };
    
    const handleAddTask = () => {
        if (newTask.trim() === '') return;
        const formattedDate = selectedDate.toISOString().split('T')[0]; 
        const taskId = uuidv4();
        const createdTime = new window.Date().toLocaleTimeString(); 
    
        const newTaskObj = { 
          id: taskId, 
          text: newTask, 
          completed: false, 
          completedTime: null,
          createdTime: createdTime // 작성 시간 추가
        };
    
        // 기존 Map 수정 후 상태 업데이트
        tasks.set(taskId, newTaskObj);
        setTasks(new Map(tasks)); // 새로운 Map을 생성하지 않고 기존 Map을 수정한 후 상태를 업데이트
    
        saveTasksToLocalStorage(formattedDate, Array.from(tasks.values()));
        setNewTask('');
    };
      const handleDeleteTask = (taskId) => {
        const formattedDate = selectedDate.toISOString().split('T')[0];
        
        if (window.confirm('정말로 삭제하시겠습니까?')) { // 삭제 확인
            if (tasks.has(taskId)) {
                tasks.delete(taskId); // 해당 task 삭제
                
                setTasks(new Map(tasks)); // 상태 업데이트
                saveTasksToLocalStorage(formattedDate, Array.from(tasks.values())); // 로컬 스토리지 업데이트
            }
        }
    };
    



    return (
        <>      
            <Wrapper>
                <Date>
                    {getDayName(selectedDate)}, {selectedDate.getDate()}th
                </Date>
                <TaskList>
                    <TabContainer>
                        <TabIndicator 
                            activeIndex={activeIndex} 
                            setActiveIndex={setActiveIndex} 
                            />
                    </TabContainer>
                    <TabContent>
                        {/* Pending Tasks 컨텐츠 */}
                        {activeIndex === 0 && (
                            <PendingTask 
                                tasks={tasks} 
                                setTasks={setTasks} 
                                handleDeleteTask={handleDeleteTask}
                                selectedDate={selectedDate}
                                />
                        )}

                        {/* Completed Tasks 컨텐츠 */}
                        {activeIndex === 1 && (
                            <CompletedTask 
                                tasks={tasks} 
                                setTasks={setTasks} 
                                handleDeleteTask={handleDeleteTask}
                                selectedDate={selectedDate}
                                />
                        )}
                    </TabContent>
                </TaskList>
                <TaskFooter>
                    {addModal ? 
                        <AddTask>
                            <input
                                type="text"
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                                placeholder="Add a new task"
                                required
                                autoComplete='on'
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();  // 기본 Enter 키 동작 막기
                                        handleAddTask();
                                    }
                                }}
                            />
                            <span onClick={handleAddTask}>
                                <CopyPlus/>
                            </span>
                            <span onClick={() => setAddModal(false)}>
                                <Undo2/>
                            </span>
                        </AddTask>
                    : 
                        <BtnSpan>
                            <span id='calendar' onClick={handleCloseModal}>
                                <CalendarDays/>
                            </span>
                            <span id='add' onClick={() => setAddModal(true)}>
                                <Plus/>
                            </span>

                        </BtnSpan>
                    }
                </TaskFooter>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const Date = styled.div`
    position: relative;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 70%;
`;
const TabContainer = styled.div`
  display: flex;
  background-color: whitesmoke;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  margin-top: 10px;
  width: 80%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
const TabContent = styled.div`
  width: 80%;
  height: 85%;
  margin: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const TaskFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15%;
    padding: 0 10px;
    border-top: 1px solid #ccc;
`;
const AddTask = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 10px;
    input {
        width: 50%;
        height: 100%;
        padding: 10px;
        border: none;
        box-shadow: inset 0px -1px 0px 0px rgb(62, 76, 247);
        font-size: 1rem;
        &::placeholder {
            color: rgb(62, 76, 247);
        }
    }
    span {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        color: rgb(62, 76, 247);
        border-radius: 50%;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
`;
const BtnSpan = styled.div`
    padding: 20px;
    width: 50%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    span {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid rgb(62, 76, 247);
        background-color: #fff;
        /* box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2); */
        color:  rgb(62, 76, 247);
        cursor: pointer;
        &:hover {
            background-color: #f0f0f0;
        }
    }
`;  


export default Task;
