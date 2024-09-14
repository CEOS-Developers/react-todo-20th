import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TodoInput from "./components/TodoInput";
import TodoBoard from "./components/TodoBoard";
import Chart from "./components/Chart";
import Item from "./components/Item";

const TodoTemplate = () => {
  const [todos, setTodos] = useState([]);

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <TodoInput todos={todos} setTodos={setTodos} />
        <GridContainer>
          <TodoBoard todos={todos} />
          <Chart />
        </GridContainer>
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

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.625rem 1.25rem;

  border-radius: 1.875rem;
  border: 0.063rem solid var(--blue);
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
