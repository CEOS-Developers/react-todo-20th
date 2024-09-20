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
  const [modalText, setModalText] = useState(''); // 기능마다 모달 text를 다르게 하기 위함
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
  }, []); // 새로고침 시 이전 데이터를 불러오기. localStorage로부터 todo 배열을 todo state에 저장하고 모든 todo 완료 상태를 저장

  useEffect(() => {
    // todos 배열이 비어 있지 않을 때만 로컬 스토리지 업데이트, 새로고침 시 todos 배열이 비어진 상태일 때 비동기로 인해 로컬 스토리지를 덮어씌우지 않게 하기 위함.
    // 이미 todo를 다 완료해서 삭제 했다면 상관 없지! 빈 배열로 덮어씌워져도.
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);


  useEffect(() => {
    if (totalTodos > 0 && totalTodos === completedTodos) {
      if (!isAllCompleted) {
        // 모든 TODO가 완료되고 isAllCompleted가 false일 때만 모달 표시 및 상태 업데이트
        setModalText('축하합니다!🩷 모든 todo를 완료했습니다.👍🏻');
        setIsModalOpen(true);
        setIsAllCompleted(true);
        localStorage.setItem('isAllCompleted', JSON.stringify(true));
      }
    } else {
      if (isAllCompleted) {
        // 모든 TODO가 완료되지 않았고 isAllCompleted가 true일 때만 상태 업데이트
        setIsAllCompleted(false);
        localStorage.setItem('isAllCompleted', JSON.stringify(false));
      }
    }
  }, [totalTodos, completedTodos, isAllCompleted]);
  
  const addTodo = useCallback((newTodo) => {
    // 입력된 할 일이 빈 문자열이거나 공백만 있을 경우 처리
  if (newTodo.trim() === '') {
    setModalText('오늘의 할 일을 입력해 주세요!🍀'); // 모달에 띄울 텍스트 설정
    setIsModalOpen(true);
    return; 
  }
    
  setTodos(prevTodos => [
    ...prevTodos, 
    { 
      text: newTodo, 
      completed: false, 
      timestamp: Date.now() // 고유한 timestamp 추가
    }
  ]);
  },[]); // useCallback으로 함수 재생성을 방지, todo 상태가 변화해도 재생성 x

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