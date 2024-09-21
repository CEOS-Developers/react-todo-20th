import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import Header from "./components/Header";
import List from "./components/List";
import Editor from "./components/Editor";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Editor />
        <List />
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
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #788bff;
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
`;

export default App;
