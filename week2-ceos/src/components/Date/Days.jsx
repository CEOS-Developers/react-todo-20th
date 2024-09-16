import { addDays, format } from "date-fns";
import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";
import { useStore } from "@core/store";
import DayItem from "./DayItem";
import TodosHeader from "../Todos/TodosHeader";
import { useState } from "react";
import { ko } from "date-fns/locale";

//날짜들 부분
export default function Days() {
  let days = [];
  const formattedtoday = format(new Date(), "MM월 dd일 EEEE", { locale: ko });
  const [clickedDate, setClickedDate] = useState(formattedtoday);
  const thisweek = useStore((state) => state.weekStart);

  // 현재 주의 날짜들을 생성
  for (let i = 0; i < 7; i++) {
    const currentDay = addDays(thisweek, i);

    function handleClickDay() {
      const formattedClickedDate = format(currentDay, "MM월 dd일 EEEE", { locale: ko });
      setClickedDate(formattedClickedDate);
    }

    days.push(<DayItem handleClickDay={handleClickDay} key={currentDay} currentDay={currentDay} />);
  }
  return (
    <>
      <WeekWrapper>{[...days]}</WeekWrapper>
      <TodosHeader clickedDate={clickedDate} />
    </>
  );
}

const WeekWrapper = styled.div`
  ${rowFlex}
  justify-content: space-between;
`;
