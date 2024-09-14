import styled from 'styled-components';
import InputForm from './InputForm';
import TodoList from './TodoList';

const MainContainer = styled.main`
  display: flex;
  margin-top: 1.875rem;
  padding-top: 0.9375rem;
  max-width: 90%;
  width: 50rem;
  height: 80vh;
  gap: 0.625rem;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;
const DateContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(84, 170, 84, 0.922);
`;
const TodoCountContainer = styled.section`
  display: flex;
  gap: 0.625rem;
  color: rgba(84, 170, 84, 0.922);
`;
const Main = ({ addTodo, todos, toggleTodoCompletion, deleteTodo, totalTodos, completedTodos }) => {
  const today = new Date(); // 현재 날짜와 시간을 가져오는 Date 객체
  const monthAndDay = today.toLocaleDateString("ko-KR",  { month: "long", day: "numeric" }); // 옵션 형식의 한국어 날짜
  const week = today.toLocaleDateString("en-US",  { weekday: "long"});
  return (
    <MainContainer>
      <DateContainer>
        <h2>{monthAndDay}🍀</h2>
        <p>{week}</p>
      </DateContainer>
      <TodoCountContainer>
        <span>✅: {totalTodos}</span>
        <span>🥳: {completedTodos}</span>
      </TodoCountContainer>
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
