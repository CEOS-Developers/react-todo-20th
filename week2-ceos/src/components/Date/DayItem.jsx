/* eslint-disable react/prop-types */
import styled from "styled-components";
import { rowFlex } from "@styles/commonStyle";
import { format, isToday } from "date-fns";

export default function DayItem({ currentDay }) {
  const isTodayBoolean = isToday(currentDay);
  const formattedDay = format(currentDay, "dd");

  console.log(isTodayBoolean);

  return <DayWrapper $isTodayBoolean={isTodayBoolean}>{formattedDay}</DayWrapper>;
}

const DayWrapper = styled.span`
  ${rowFlex}
  width: 2rem;
  height: 2rem;

  color: ${({ $isTodayBoolean, theme }) => {
    return $isTodayBoolean && theme.colors.white;
  }};

  background-color: ${({ $isTodayBoolean, theme }) => {
    return $isTodayBoolean && theme.colors.main_blue;
  }};
  border-radius: 10px;
`;
