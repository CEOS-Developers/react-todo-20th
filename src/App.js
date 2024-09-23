import React, { useState, useEffect } from "react";
import { 
  AppContainer, Main, TodoContainer, MainText, Line, TodosBody,
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
      // 새로운 투두 객체를 생성 (complete 속성 추가)
      setTodos([...todos, { text: newTodo, complete: false }]);
      setNewTodo(""); // 입력창 초기화
    }
  };

  // 할 일 삭제
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // 할 일 완료
  const completeTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, complete: !todo.complete } : todo
    );
    setTodos(updatedTodos); // 상태 업데이트
  };

  // 엔터키로 할 일 추가
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  // 완료된 할 일 개수
  const completedTodosCount = todos.filter(todo => todo.complete).length;

  return (
    <>
      <GlobalStyle /> {/* 글로벌 스타일 적용 */}
      <AppContainer>
        <MainText>
          Better<p></p>
          than<p></p>
          Yesterday!
        </MainText>
        <Line></Line>
        <Main>
          <TodoContainer>
            <TodoHeader>
              <p>{currentDate}</p> {/* 현재 날짜 출력 */}
              <div>
                <div>
                  todo: {todos.length - completedTodosCount} {/* 투두 개수 */}
                </div>
                <div>
                  complete: {completedTodosCount} {/* 완료된 투두 개수 */}
                </div>
              </div>
            </TodoHeader>

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

            <TodosBody>
              <TodoList>
              {todos.map((todo, index) => (
                <TodoItem key={index}>
                  <Button onClick={() => completeTodo(index)}>완료</Button>
                  <span 
                    style={{ 
                      textDecoration: todo.complete ? "line-through" : "none" 
                    }}
                  >
                    {todo.text}
                  </span>
                  <RemoveButton onClick={() => removeTodo(index)}>삭제</RemoveButton>
                </TodoItem>
              ))}
            </TodoList>
            </TodosBody>
            
          </TodoContainer>
        </Main>
      </AppContainer>
    </>
  );
};

export default App;
