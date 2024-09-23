import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

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

  const { doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <ListContainer>
      <TopWrapper>
        <h4>Todo List 🌱</h4>
        <CountWrapper>
          <span>todo : {notDoneCount}</span>
          <span>done : {doneCount}</span>
        </CountWrapper>
      </TopWrapper>
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
          );
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
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    color: #788bff;
    margin: 0;
  }
`;

const CountWrapper = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #8790ca;
    font-size: 0.8rem;
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
