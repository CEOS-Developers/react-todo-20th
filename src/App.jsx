import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";
import { useRef, useReducer } from "react";

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
    content: "고양이 밥 주기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "고양이 놀아주기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockDate);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => {
    dispatch({ type: "UPDATE", targetId: targetId });
  };

  const removeTodo = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Editor onCreate={onCreate} />
        <List todos={todos} onUpdate={onUpdate} removeTodo={removeTodo} />
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
  box-sizing: border-box;

  /* 모바일 반응형 */
  @media (max-width: 768px) {
    width: 360px;
    height: 560px;
    padding: 20px;
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
