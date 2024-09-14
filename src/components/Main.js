import styled from 'styled-components';
import InputForm from './InputForm';
import TodoList from './TodoList';

const MainContainer = styled.main`
  display: flex;
  margin-top: 0.625rem;
  padding-top: 0.9375rem;
  width: 70%;
  height: 80vh;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

const Main = ({ addTodo, todos, toggleTodoCompletion, deleteTodo }) => {
  return (
    <MainContainer>
      <InputForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodoCompletion={toggleTodoCompletion}
        deleteTodo={deleteTodo}
      />
    </MainContainer>
  );
};

export default Main;
