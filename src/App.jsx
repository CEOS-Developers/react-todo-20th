import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";
import { useState, useRef } from "react";

const mockDate = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래연습하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockDate);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([...todos, newTodo]);
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const removeTodo = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Editor onCreate={onCreate} />
        <List
          todos={todos}
          onUpdate={onUpdate}
          setTodos={setTodos}
          removeTodo={removeTodo}
        />
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  margin: 0 auto;
  background-color: #f1f3ff;
  border-radius: 5px;
  padding: 30px;
  box-shadow: inset 0 0 20px #d6ddff;
  height: 80vh;

  /* 모바일 반응형 */
  @media (max-width: 768px) {
    width: 360px;
    padding: 20px;
    height: 90vh;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #788bff;
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    display:flex;
    height:100vh;
    justify-content:center;
    align-items:center;

    /* 모바일 반응형 */
    @media (max-width: 768px) {
       height:100vh;
       width:100%;
    }
  }
`;

export default App;
