import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
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
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos)); // todos가 있을 때만 저장
    }
  }, [todos]);

  const addTodo = ((newTodo) => {
    if (newTodo.trim() === '') {
      alert('오늘의 할 일을 적어주세요!🍀');
      return;
    }

    if (todos.some(todo => todo.text === newTodo)) {
      alert('이미 동일한 투두가 있습니다!👏🏻');
      return;
    }

    setTodos(prevTodos => [...prevTodos, { text: newTodo, completed: false }]); // 기존 내용 + 추가
  });

  const toggleTodoCompletion = ((todoText) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.text === todoText ? { ...todo, completed: !todo.completed } : todo
      )
    );
  });

  const deleteTodo = ((todoText) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setTodos(prevTodos => prevTodos.filter(todo => todo.text !== todoText));
      alert('todo가 삭제되었습니다.');
    }
  });

  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Main
        addTodo={addTodo}
        todos={todos}
        toggleTodoCompletion={toggleTodoCompletion}
        deleteTodo={deleteTodo}
      />
    </AppContainer>
  );
}

export default App;