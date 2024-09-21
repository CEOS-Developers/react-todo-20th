import React, { useState, useEffect } from "react";
import { 
  AppContainer, Header, Main, TodoContainer, 
  TodoHeader, TodoList, TodoItem, TodoInput, 
  Input, Button, RemoveButton 
} from './styles';
import { GlobalStyle } from './styles';

const App = () => {
  const [todos, setTodos] = useState([]); // 할 일 목록 관리
  const [newTodo, setNewTodo] = useState(""); // 새로 추가될 할 일 관리
  const [currentDate, setCurrentDate] = useState(""); // 현재 날짜 저장

  // 컴포넌트 마운트 시 현재 날짜 설정
  useEffect(() => {
    const today = new Date();
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    setCurrentDate(
      `${today.getMonth() + 1}월 ${today.getDate()}일 ${days[today.getDay()]}요일`
    );
  }, []);

  // 할 일 추가
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo(""); // 입력창 초기화
    }
  };

  // 할 일 삭제
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // 엔터키로 할 일 추가
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <>
      <GlobalStyle /> {/* 글로벌 스타일 적용 */}
      <AppContainer>
        <Header>
          <h1>✔ To Do</h1>
        </Header>
        <Main>
          <TodoContainer>
            <TodoHeader>
              <h2>오늘 할 일</h2>
              <p>{currentDate}</p> {/* 현재 날짜 출력 */}
            </TodoHeader>

            <TodoList>
              {todos.map((todo, index) => (
                <TodoItem key={index}>
                  <span>{todo}</span>
                  <RemoveButton onClick={() => removeTodo(index)}>삭제</RemoveButton>
                </TodoItem>
              ))}
            </TodoList>

            <TodoInput>
              <Input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="할 일 추가"
              />
              <Button onClick={addTodo}>추가</Button>
            </TodoInput>
          </TodoContainer>
        </Main>
      </AppContainer>
    </>
  );
};

export default App;
