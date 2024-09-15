import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { S } from "./components/Common.style";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TodoInput from "./components/TodoInput";
import TodoBoard from "./components/TodoBoard";

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

  return (
    <Wrapper>
      <Navbar {...{ isFormOpen, toggleForm }} />
      <Container>
        <TodoBoard {...{ todos, removeItem, toggleItem }} />
        {isFormOpen && (
          <TodoInput {...{ isFormOpen, animationClassname, addItem }} />
        )}
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default TodoTemplate;

const Wrapper = styled.div`
  width: 37.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 62.5rem) {
    width: 80vw;
  }
`;

const Container = styled(S.Box)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 0.625rem 1.25rem;
`;
