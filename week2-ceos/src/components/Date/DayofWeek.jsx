import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";
import { todayWeekDay } from "../../utils/data";

//요일 부분
export default function DayofWeek() {
  const DAY_OF_WEEK = ["일", "월", "화", "수", "목", "금", "토"];

  const weeksList = DAY_OF_WEEK.map((week, index) => (
    <DayWrapper week={index} key={week}>
      {week}
    </DayWrapper>
  ));
  return <WeekWrapper>{weeksList}</WeekWrapper>;
}

const WeekWrapper = styled.section`
  ${rowFlex}
  justify-content: space-between;
`;

const DayWrapper = styled.span`
  color: ${({ week, theme }) => {
    if (week === 0) {
      return theme.colors.sunday_red;
    } else if (week === todayWeekDay) {
      return theme.colors.black;
    } else {
      return theme.colors.gray1;
    }
  }};

  ${({ theme, week }) => (week === todayWeekDay ? theme.fonts.Body1 : theme.fonts.Body2)};
`;
