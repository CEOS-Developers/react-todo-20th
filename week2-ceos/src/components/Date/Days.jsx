import { addDays, endOfWeek, format, startOfWeek } from "date-fns";
import { newDate } from "@utils/data";
import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";

//날짜들 부분
export default function Days() {
  let weekStart = startOfWeek(newDate);

  let days = [];

  for (let i = 0; i < 7; i++) {
    const currentDay = addDays(weekStart, i);

    days.push(<DayItem key={i}>{format(currentDay, "d")}</DayItem>);
  }

  return <Wrapper>{days}</Wrapper>;
}

const Wrapper = styled.div`
  ${rowFlex}
  justify-content: space-between;
  padding: 2rem 0;
`;

const DayItem = styled.p`
  ${rowFlex}
  ${({ theme }) => theme.fonts.Body2};
`;
