import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // 고유 ID 생성을 위해 uuid 사용
import styled from 'styled-components';
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from '../../utils/localStorage';
import { CalendarDays, CircleX, CopyPlus, Pencil, Plus, Undo2, X } from 'lucide-react';


function Task({ selectedDate, handleCloseModal }) {
    const [tasks, setTasks] = useState(new Map()); // 해시맵 구조로 tasks를 관리
    const [newTask, setNewTask] = useState('');
    const [addModal, setAddModal] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);


    // 선택된 날짜에 따른 투두리스트 불러오기
    useEffect(() => {
        const formattedDate = selectedDate.toISOString().split('T')[0]; // YYYY-MM-DD 형식
        const loadedTasks = getTasksFromLocalStorage(formattedDate);

        // Map으로 taskId와 task를 매핑
        const newTaskMap = new Map();
        loadedTasks.forEach(task => newTaskMap.set(task.id, task));

        setTasks(newTaskMap);
    }, [selectedDate]);

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
    
    const handleCompleteTask = (taskId) => {
        const formattedDate = selectedDate.toISOString().split('T')[0];
        if (tasks.has(taskId)) {
            if (window.confirm('이 할 일을 완료하였습니까?')) {  // 완료 확인
                const task = tasks.get(taskId); // 기존 task 복사
                const updatedTask = {
                    ...task,
                    completed: !task.completed,
                    completedTime: !task.completed ? new window.Date().toLocaleTimeString() : null,
                };
            
                tasks.set(taskId, updatedTask); // 기존 Map 수정
            
                setTasks(new Map(tasks)); // 새로운 Map을 생성하지 않고 기존 Map을 수정한 후 상태를 업데이트
                saveTasksToLocalStorage(formattedDate, Array.from(tasks.values()));
            }
        }
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
                        {/* Pending Tasks 탭 */}
                        <RadioInput
                            type="radio"
                            id="tab1"
                            name="tab"
                            checked={activeIndex === 0}
                            onChange={() => setActiveIndex(0)}
                        />
                        <TabLabel htmlFor="tab1">Pending Tasks</TabLabel>
                        <ActiveTabIndicator style={{ left: `calc(${activeIndex * 100}% / 2)` }} />

                        {/* Completed Tasks 탭 */}
                        <RadioInput
                            type="radio"
                            id="tab2"
                            name="tab"
                            checked={activeIndex === 1}
                            onChange={() => setActiveIndex(1)}
                        />
                        <TabLabel htmlFor="tab2">Completed Tasks</TabLabel>
                    </TabContainer>
                    <TabContent>
                        {/* Pending Tasks 컨텐츠 */}
                        {activeIndex === 0 && (
                        <TaskItemsContainer>
                            {Array.from(tasks.values())
                            .filter((task) => !task.completed)
                            .map((task) => (
                                <TaskItem
                                    key={task.id}
                                    onClick={() => handleCompleteTask(task.id)}
                                    className={task.completed ? 'completed' : ''}
                                >
                                    <p className='task-text'>
                                        {task.text}                                        
                                    </p>
                                    <p className='task-time'>
                                        <span className='util-btn'>
                                            <button>Edit</button>
                                            <button onClick={()=>handleDeleteTask(task.id)}>Delete</button>
                                        </span>
                                        <span>작성시간 : {task.createdTime}</span>
                                    </p>
                                </TaskItem>
                            ))}
                        </TaskItemsContainer>
                        )}

                        {/* Completed Tasks 컨텐츠 */}
                        {activeIndex === 1 && (
                        <TaskItemsContainer>
                            {Array.from(tasks.values())
                            .filter((task) => task.completed)
                            .map((task) => (
                                <TaskItem
                                    key={task.id}
                                    className={task.completed ? 'completed' : ''}
                                    onClick={() => handleCompleteTask(task.id)}
                                >
                                    <p className='task-text'>
                                        {task.text}                                        
                                    </p>
                                    <p className='task-time'>
                                        <span className='util-btn'>
                                            <button>Edit</button>
                                            <button onClick={()=>handleDeleteTask(task.id)}>Delete</button>
                                        </span>
                                        <span>완료시간 : {task.createdTime}</span>
                                    </p>
                                </TaskItem>
                            ))}
                        </TaskItemsContainer>
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

const TaskColumn = styled.div`
    width: 50%;
    height: 100%;
    padding-bottom: 10px;
    overflow: hidden;
`;
const TaskHeader = styled.h3`
    margin: 0;
    padding: 10px;
    border-bottom: 1px solid #ddd; /* 구분선 추가 */
    font-size: 1.2rem;
    text-align: center;
`;

const TaskItemsContainer = styled.div`
    margin-top: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    height: calc(100%); /* 컨테이너 높이에서 여유 공간을 확보 */
    overflow-y: auto; /* 항목들에 대한 스크롤 */
    /* 스크롤바 숨기기 */
    &::-webkit-scrollbar {
        display: none; /* 크롬, 사파리, 엣지에서 스크롤바 숨기기 */
    }
    -ms-overflow-style: none;  /* IE와 Edge에서 스크롤바 숨기기 */
    scrollbar-width: none;  /* Firefox에서 스크롤바 숨기기 */
`;


const TaskItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: auto;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px; 
    &:hover {
        background-color: #f0f0f0;
    }
    transition: all 0.5s ease; /* 트랜지션 추가 */
    cursor: pointer;
    .task-text {
        margin: 0;
        font-size: 1rem;
        display: flex;
        justify-content: space-between;
        overflow-wrap: break-word;
    }
    .task-time {
        display: flex;
        justify-content: flex-end;
        gap: 5px;
        margin: 0;
        font-size: 0.8rem;
        color: gray;
    }
    .util-btn {
        display: flex;
        cursor: pointer;
        button {
            border: none;
            background-color: transparent;
            color: #007bff;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
    }

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

const RadioInput = styled.input`
  display: none;

  &:checked + label {
    color: white;
  }

  &:checked + label + div {
    left: ${({ index }) => `calc(${index * 100}% / 2)`};
  }
`;

const TabLabel = styled.label`
  flex: 1;
  padding: 15px 20px;
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  text-align: center;
  position: relative;
  z-index: 1;
  transition: color 0.5s ease;

  &:hover {
    background-color: rgba(1, 0, 0, 0.01);
  }
  @media (min-width: 360px) {
    font-size: 12px;
  } 
`;

const ActiveTabIndicator = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% / 2);
  height: 100%;
  background-color: rgb(62, 76, 247);
  border-radius: 25px;
  transition: left 0.3s ease;
  z-index: 0;
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

export default Task;
