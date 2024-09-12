import styled from "styled-components";
import Header from "../components/Header/Header";
import DayofWeek from "../components/Date/DayofWeek";
import Days from "../components/Date/Days";

export default function MainPage() {
  return (
    <Wrapper>
      <Header />
      <HeaderAndDayOfWeekWrapper>
        <DayofWeek />
        <Days />
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

  padding: 0 5rem;

  background-color: ${({ theme }) => theme.colors.gray3};
`;
