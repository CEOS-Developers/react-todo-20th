import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // 고유 ID 생성을 위해 uuid 사용
import styled from 'styled-components';
import { getTasksFromLocalStorage, getTodoProgressForDate, saveTasksToLocalStorage } from '../../utils/LocalStorage';
import { CalendarDays, CircleX, CopyPlus, Medal, Pencil, Plus, Undo2, X } from 'lucide-react';
import PendingTask from './components/PendingTask';
import CompletedTask from './components/CompletedTask';
import TabIndicator from './components/TabIndicator';
import Tooltip from '../../utils/Tooltip';
import Swal from 'sweetalert2';



function Task({ selectedDate, handleCloseModal }) {
    const [tasks, setTasks] = useState(new Map()); // 해시맵 구조로 tasks를 관리
    const [newTask, setNewTask] = useState('');
    const [addModal, setAddModal] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [tooltip, setTooltip] = useState(null); // tooltip 상태
    const { completed, total } = getTodoProgressForDate(selectedDate); // 성취도 계산



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
    const handleTodoCheck = () => {
        if (completed === total && total > 0) {
            // SweetAlert2로 축하 메시지 알림
            Swal.fire({
                title: '축하합니다!',
                text: '모든 할 일이 완료되었습니다!',
                icon: 'success',
                confirmButtonText: '오예!',
                width: '360px',  // 창 크기 조정
                position: 'center',  // 화면 중앙에 고정
                customClass: {
                    popup: 'custom-popup', // 사용자 정의 클래스 추가
                },
                heightAuto: false,  // height 자동 조정 비활성화


            });
        } else if (completed !== total && total > 0) {
            Swal.fire({
                title: '아쉽습니다!',
                text: '아직 할 일을 다 완료하지 못하였습니다.',
                icon: 'warning',
                confirmButtonText: '그래..',
                width: '360px',  // 창 크기 조정
                position: 'center',  // 화면 중앙에 고정
                customClass: {
                    popup: 'custom-popup', // 사용자 정의 클래스 추가
                },
                heightAuto: false,  // height 자동 조정 비활성화

            });
        } else if (total === 0) {
            Swal.fire({
                title: '할 일이 없습니다!',
                text: '할 일을 추가해보세요.',
                icon: 'info',
                confirmButtonText: '넵!',
                width: '360px',  // 창 크기 조정
                position: 'center',  // 화면 중앙에 고정
                customClass: {
                    popup: 'custom-popup', // 사용자 정의 클래스 추가
                },
                heightAuto: false,  // height 자동 조정 비활성화

            });
        }
        
    }
    const showTooltip = (text) => setTooltip(text);
    const hideTooltip = () => setTooltip(null);
    
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
                            <span 
                                onClick={handleAddTask}
                                onMouseEnter={() => showTooltip('추가하기')}
                                onMouseLeave={hideTooltip}>
                                <CopyPlus/>
                                {tooltip === '추가하기' && <Tooltip text="추가하기" />}
                            </span>
                            <span 
                                onClick={() => setAddModal(false)}
                                onMouseEnter={() => showTooltip('뒤로가기')}
                                onMouseLeave={hideTooltip}>
                                <Undo2/>
                                {tooltip === '뒤로가기' && <Tooltip text="뒤로가기" />}
                            </span>
                        </AddTask>
                    : 
                        <BtnSpan>
                            <span className='calendar' onClick={handleCloseModal}>
                                <CalendarDays/>
                            </span>
                            <span className='acheive' onClick={handleTodoCheck}>
                                <Medal/>

                                <p>
                                    {completed} / {total}
                                </p>
                            </span>
                            <span className='add' onClick={() => setAddModal(true)}>
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
        position: relative;
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
        &:hover {
            background-color: #f0f0f0;
        }
        
    }
`;
const BtnSpan = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-around;
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
        color:  rgb(62, 76, 247);
        cursor: pointer;
        &:hover {
            background-color: #f0f0f0;
        }
        
    }
    .acheive {
            padding: 0 20px;
            width: auto;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            border: 2px solid rgb(62, 76, 247);
            color: rgb(62, 76, 247);
            border-radius: 28px;
            cursor: pointer;
            &:hover {
                background-color: #f0f0f0;
            }
        }
`;  


export default Task;
