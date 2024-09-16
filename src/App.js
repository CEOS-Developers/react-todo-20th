import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Main from './components/Main';
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
  }, []);

  useEffect(() => {
    // todos 배열이 비어 있지 않을 때만 로컬 스토리지 업데이트, 새로고침 시 todos 배열이 비어진 상태일 때 로컬 스토리지를 덮어씌우지 않게 하기 위함.
    // 이미 todo를 다 완료해서 삭제 했다면 상관 없지! 빈 배열로 덮어씌워져도.
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);
  
  const addTodo = useCallback((newTodo) => {
    if (todos.some(todo => todo.text === newTodo)) {
      alert('이미 동일한 투두가 있습니다!👏🏻');
      return;
    }

    setTodos(prevTodos => [...prevTodos, { text: newTodo, completed: false }]); // 기존 내용 + 추가
  },[todos]);

  const toggleTodoCompletion = useCallback((todoText) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.text === todoText ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((todoText) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setTodos(prevTodos => {
        const updatedTodos = prevTodos.filter(todo => todo.text !== todoText);
        // todos 상태 업데이트 후 로컬 스토리지 업데이트
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        alert('todo가 삭제되었습니다.');
        return updatedTodos;
      });
    }
  }, []);
  
  // 전체 todo와 완료된 todo의 개수를 계산하는 함수
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;


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
    </AppContainer>
  );
}

export default App;