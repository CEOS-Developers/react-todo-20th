import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { S } from "./components/Common.style";

import Navbar from "./components/Navbar";
import TodoBoard from "./components/TodoBoard";
import TodoInput from "./components/TodoInput";
import DonutGraph from "./components/DonutGraph";
import Footer from "./components/Footer";

const TodoTemplate = () => {
  // 초기 데이터
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // 배열이 변경될 때마다 localStorage 업데이트
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 항목 추가
  const addItem = useCallback(
    (text) => {
      const item = {
        id: Date.now().toString(),
        text,
        checked: false,
      };
      setTodos(todos.concat(item));
    },
    [todos]
  );

  // 항목 삭제
  const removeItem = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  // 항목 토글
  const toggleItem = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? { ...todo, checked: !todo.checked, id: Date.now().toString() }
            : todo
        )
      );
    },
    [todos]
  );

  // 입력창 열고 닫음
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [animationClassname, setAnimationClassname] = useState(""); // 애니메이션 지정을 위한 클래스명

  const toggleForm = () => {
    if (isFormOpen) {
      setAnimationClassname("fade-out");
      setTimeout(() => {
        setIsFormOpen(!isFormOpen);
      }, 300); // 닫힘 시 애니메이션 시간만큼의 지연 필요
    } else {
      setAnimationClassname("fade-in");
      setIsFormOpen(!isFormOpen);
    }
  };

  // 항목 개수
  const totalCount = todos.length; // 전체 항목
  const doneCount = todos.reduce((count, todo) => {
    return todo.checked ? count + 1 : count;
  }, 0); // 완료 항목
  const percent = (doneCount / totalCount) * 100; // 도넛그래프 성취율

  return (
    <Wrapper>
      <Navbar {...{ isFormOpen, toggleForm }} />
      <Container>
        <TodoBoard {...{ todos, removeItem, toggleItem }} />
        <InputAndGraph>
          {isFormOpen && (
            <TodoInput {...{ isFormOpen, animationClassname, addItem }} />
          )}
          <DonutGraph {...{ percent }} />
        </InputAndGraph>
      </Container>
      <Footer {...{ totalCount, doneCount }} />
    </Wrapper>
  );
};

export default TodoTemplate;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  height: 100%;
`;

const Container = styled(S.Box)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 10px;
  width: 100%;
  height: auto;
  padding: 0.625rem 1.25rem;
`;

const InputAndGraph = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
`;
