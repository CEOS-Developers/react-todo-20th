import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Modal from './components/Modal';
import ConfirmModal from './components/ConfirmModal';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Pretendard Variable', sans-serif;
  }
  @font-face {
    font-family: 'Pretendard Variable';
    font-weight: 45 920;
    font-style: normal;
    font-display: swap;
    src: url('/fonts/PretendardVariable.woff2') format('woff2-variations');
  }
`; // 전체 페이지의 기본 여백 제거, 코드의 중복을 줄이고 모든 컴포넌트에 일관된 스타일 적용

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [isAllCompleted, setIsAllCompleted] = useState(false); // 모든 todo가 완료되었는지 여부를 추적
  const [modalText, setModalText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null); // 삭제할 todo

  // 전체 todo와 완료된 todo의 개수를 계산하는 함수
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;


  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      try {
        setTodos(JSON.parse(storedTodos)); // 데이터가 있다면 JSON 파싱
      } catch (error) {
        console.error("로컬 스토리지에서 데이터를 불러오는 중 오류 발생:", error);
        setTodos([]); // 오류가 있으면 빈 배열로 초기화
      }
    }
    const storedIsAllCompleted = localStorage.getItem('isAllCompleted');
    if (storedIsAllCompleted) {
      setIsAllCompleted(JSON.parse(storedIsAllCompleted));
    }
  }, []);

  useEffect(() => {
    // todos 배열이 비어 있지 않을 때만 로컬 스토리지 업데이트, 새로고침 시 todos 배열이 비어진 상태일 때 로컬 스토리지를 덮어씌우지 않게 하기 위함.
    // 이미 todo를 다 완료해서 삭제 했다면 상관 없지! 빈 배열로 덮어씌워져도.
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  // 전체 todo가 완료되었을 때만 alert을 띄움
  useEffect(() => {
    if (totalTodos > 0 && totalTodos === completedTodos && !isAllCompleted) {
      setModalText('축하합니다!🩷 모든 todo를 완료했습니다.👍🏻');
      setIsModalOpen(true); // 모달을 엶
      setIsAllCompleted(true); // 한 번 alert이 뜨면 다시 뜨지 않도록 설정
      localStorage.setItem('isAllCompleted', JSON.stringify(true)); // 완료 상태를 저장
    } else if (completedTodos !== totalTodos) {
      setIsAllCompleted(false); // 다시 완료되지 않은 상태로 돌아가면 초기화
      localStorage.setItem('isAllCompleted', JSON.stringify(false)); // 완료 상태를 저장
    }
  }, [totalTodos, completedTodos, isAllCompleted]);
  
  const addTodo = useCallback((newTodo) => {
    // 입력된 할 일이 빈 문자열이거나 공백만 있을 경우 처리
  if (newTodo.trim() === '') {
    setModalText('오늘의 할 일을 입력해 주세요!🍀'); // 모달에 띄울 텍스트 설정
    setIsModalOpen(true); // 모달을 열기
    return; // 함수 종료
  }
    
  setTodos(prevTodos => [
    ...prevTodos, 
    { 
      text: newTodo, 
      completed: false, 
      timestamp: Date.now() // 고유한 timestamp 추가
    }
  ]);
  },[setTodos]);

  const toggleTodoCompletion = useCallback((todoTimeStamp) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.timestamp === todoTimeStamp ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((todoTimestamp) => {
    setTodoToDelete(todoTimestamp);
    setIsConfirmModalOpen(true);
  }, []);

  const handleConfirmDelete = useCallback(() => {
    setTodos(prevTodos => {
      const updatedTodos = prevTodos.filter(todo => todo.timestamp !== todoToDelete);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    });
    setIsConfirmModalOpen(false);
    setModalText('todo를 삭제했습니다. 🥲');
    setIsModalOpen(true);
  }, [todoToDelete]);
  

  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Main
        addTodo={addTodo}
        todos={todos}
        toggleTodoCompletion={toggleTodoCompletion}
        deleteTodo={deleteTodo}
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      /> 
      <Modal ModalText={modalText} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={() => setIsConfirmModalOpen(false)}
      />
    </AppContainer>
  );
}

export default App;