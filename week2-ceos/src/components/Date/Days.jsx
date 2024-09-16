import { addDays, format } from "date-fns";
import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";
import { useStore } from "@core/store";
import DayItem from "./DayItem";

//날짜들 부분
export default function Days() {
  let days = [];
  let clickedDate;
  const thisweek = useStore((state) => state.weekStart);

  // 현재 주의 날짜들을 생성
  for (let i = 0; i < 7; i++) {
    const currentDay = addDays(thisweek, i);
    function handleClickDay() {
      clickedDate = currentDay;
      console.log("here", clickedDate);
    }
    days.push(<DayItem handleClickDay={handleClickDay} key={currentDay} currentDay={currentDay} />);
  }
  return <WeekWrapper>{[...days]}</WeekWrapper>;
}

const WeekWrapper = styled.div`
  ${rowFlex}
  justify-content: space-between;
`;
