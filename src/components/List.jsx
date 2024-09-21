import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, setTodos, removeTodo }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredDate = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todos) => {
      return todos.content.toLowerCase().includes(search.toLowerCase());
    });
  };

  const filteredTodos = getFilteredDate();

  return (
    <ListContainer>
      <h4>Todo List 🌱</h4>
      <SearchInput
        type="text"
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <TodoWrapper>
        {filteredTodos.map((todos) => {
          return (
            <TodoItem
              key={todos.id}
              {...todos}
              onUpdate={onUpdate}
              todos={todos}
              setTodos={setTodos}
              removeTodo={removeTodo}
            />
          ); //spread, key
        })}
      </TodoWrapper>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
  overflow-y: auto;
  scrollbar-width: none;

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
