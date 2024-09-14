import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TodoInput from "./components/TodoInput";
import List from "./components/List";
import Chart from "./components/Chart";

const MainPage = () => {
  return (
    <>
      <Wrapper>
        <Navbar />
        <Container>
          <TodoInput />
          <GridContainer>
            <List />
            <Chart />
          </GridContainer>
        </Container>
        <Footer />
      </Wrapper>
    </>
  );
};

export default MainPage;

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
