import React from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import ProgressBar from "./ProgressBar";
import moment from "moment";

const TodoCalendar = ({ setDate, todos, progress }) => {
  const handleDateChange = (selectedDate) => {
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const day = String(selectedDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setDate(formattedDate);
  };

  return (
    <CalendarWrapper>
      <Calendar
        locale="ko"
        onChange={handleDateChange}
        next2Label={null}
        prev2Label={null}
        formatDay={(locale, date) => moment(date).format("DD")}
        showNeighboringMonth={false}
        minDetail="year"
        tileContent={({ date }) => {
          const existTodos = todos.some(
            (todo) => todo.date === moment(date).format("YYYY-MM-DD")
          );
          return existTodos ? (
            <StyledDot key={moment(date).format("YYYY-MM-DD")} />
          ) : null;
        }}
      />
      <ProgressBar progress={progress} />
    </CalendarWrapper>
  );
};

export default TodoCalendar;

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 95%;
  justify-content: space-evenly;

  .react-calendar {
    background-color: #ffffff1a;
    border: none;
    border-radius: 2rem;
    color: white;
    padding: 3% 5%;
  }

  .react-calendar__month-view {
    abbr {
      color: white;
    }
  }

  .react-calendar__navigation {
    justify-content: center;
  }

  .react-calendar__navigation button {
    font-weight: 600;
    font-size: 1rem;
    color: #ff3898;
  }

  .react-calendar__navigation button:focus,
  .react-calendar__navigation button:hover,
  .react-calendar__navigation button:disabled {
    background-color: none;
    border-radius: 0.8rem;
  }

  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 800;
  }

  .react-calendar__month-view__weekdays__weekday abbr {
    color: #cb84a6;
  }

  .react-calendar__tile--now {
    background: none;
    abbr {
      color: #ff3898;
    }
  }

  .react-calendar__year-view__months__month {
    border-radius: 0.8rem;
    background-color: none;
    padding: 0;
  }

  .react-calendar__tile--hasActive {
    background-color: ${(props) => props.theme.primary_2};
    abbr {
      color: none;
    }
  }

  .react-calendar__tile {
    padding: 5px 0px 18px;
    position: relative;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color: #ff38981e;
    border-radius: 0.3rem;
  }
`;

export const StyledCalendar = styled(Calendar)``;

export const StyledDot = styled.div`
  background-color: #ff3898;
  border-radius: 50%;
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
`;
