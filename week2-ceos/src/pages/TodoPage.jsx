import styled from "styled-components";
import Header from "@components/Header/Header.jsx";
import Date from "@components/Date/Date.jsx";

export default function TodoPage() {
  return (
    <Wrapper>
      <Header />
      <Date />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: skyblue;
`;
