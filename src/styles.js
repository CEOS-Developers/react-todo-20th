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
    color: black;
  }
`;

export const MainText = styled.div`
font-size: 50px;
font-weight: 600;
`

export const Line = styled.div`
background-color: black;
width: 1.5px;
height: 100px;
margin-bottom: 10px;
`

export const AppContainer = styled.div`
  margin-left: 70px;
  display: flex;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`;

export const Main = styled.main`
  height: 300px;
  width: 800px;
`;


export const TodoContainer = styled.section`
  height: 300px;
  border-color: black;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  padding: 20px;
`;

export const TodoList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 10px;
`;

export const TodoItem = styled.li`
  background-color: #c1cad6;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const TodoInput = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  background-color: transparent;
  border-radius: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #9899C2;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #6c6ea0;
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

export const TodoHeader = styled.div`
display: flex;
height: 60px;
justify-content: space-between;
`