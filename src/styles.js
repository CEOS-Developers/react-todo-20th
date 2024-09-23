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
  height: 400px;
  width: 400px;
`;


export const TodoContainer = styled.section`
  height: 400px;
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
  background-color: aliceblue;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  word-break: break-all;
`;

export const TodoInput = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border-radius: 7px;
  border: none;
  margin-right: 10px;
  background-color: transparent;
  border-radius: 10px;
`;

export const TodosBody = styled.div`
  height: 250px;
  border-radius: 5px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`

export const Button = styled.button`
  padding: 8px 8px;
  background-color: skyblue;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #6c6ea0;
  }
  white-space: nowrap;
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