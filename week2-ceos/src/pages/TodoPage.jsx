import styled from "styled-components";
import Header from "@components/Header/Header.jsx";
import Date from "@components/Date/Date.jsx";

export default function TodoPage() {
  return (
    <Wrapper>
      <HeaderAndDayOfWeekWrapper>
        <Header />
        <Date />
      </HeaderAndDayOfWeekWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
`;

const HeaderAndDayOfWeekWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  padding: 3rem;

  background-color: ${({ theme }) => theme.colors.gray3};
`;
