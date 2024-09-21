import styled from "styled-components";

const TodoItem = () => {
  return (
    <TodoItemContainer>
      <Checkbox type="checkbox" />
      <Content>todo</Content>
      <DateText>date</DateText>
      <DeleteButton>Delete</DeleteButton>
    </TodoItemContainer>
  );
};

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(240, 240, 240);
`;

const Checkbox = styled.input`
  width: 20px;
`;

const Content = styled.div`
  flex: 1;
  color: #788bff;
  &.completed {
    text-decoration: line-through;
    color: gray;
  }
`;

const DateText = styled.div`
  font-size: 14px;
  color: #8790ca;
`;

const DeleteButton = styled.button`
  cursor: pointer;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  background-color: #788bff;
`;

export default TodoItem;
