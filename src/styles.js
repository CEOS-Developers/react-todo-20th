import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: white;
  }
`;

export const AppContainer = styled.div`
  background-color: #121212;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
`;

export const Main = styled.main`
  width: 300px;
`;

export const TodoContainer = styled.section`
  background-color: #1f1f1f;
  padding: 20px;
  border-radius: 10px;
`;

export const TodoHeader = styled.div`
  margin-bottom: 20px;
`;

export const TodoList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`;

export const TodoItem = styled.li`
  background-color: #2c2c2c;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const TodoInput = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

export const RemoveButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
  margin-left: 10px; /* 완료 버튼과 10px 간격 설정 */
  &:hover {
    background-color: darkred;
  }
`;
