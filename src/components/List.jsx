import styled from "styled-components";
import TodoItem from "./TodoItem.jsx";

const List = () => {
  return (
    <ListContainer>
      <h4>💜TO DO LIST💜</h4>
      <SearchInput placeholder="Search" />
      <TodoWrapper>
        <TodoItem />
      </TodoWrapper>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;

  h4 {
    color: #788bff;
    margin: 0;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d9dfff;
  padding: 15px 0;
  color: #788bff;
  margin-bottom: 20px;
  background: transparent;

  &:focus {
    outline: none;
    color: #788bff;
    border-bottom: 1px solid #788bff;
  }

  &::placeholder {
    color: #788bff;
  }
`;

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default List;
