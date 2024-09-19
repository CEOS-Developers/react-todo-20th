import React from 'react';
import BasicCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const Calendar = ({ currentDate, setCurrentDate }) => {

    return (
        <MainContainer>
            <StyledCalendar 
                calendarType="gregory"
                value={currentDate}
                onChange={setCurrentDate}
                formatDay={(locale, date) => date.getDate()}
                tileClassName={({ date, view }) => 
                    view === 'month' && date.toDateString() === currentDate.toDateString()
                        ? 'selected'
                        : null
                }
            />
        </MainContainer>
    );
};

export default Calendar;

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin-top: 20%;
    margin-right: 5%;

    .react-calendar {
        padding: 5% 5%;
        border: none;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        flex-grow: 1;
    }
`;

const StyledCalendar = styled(BasicCalendar)`

    // 네비게이션 스타일
    .react-calendar__navigation {
        margin: 5px;
        button {
            font-size: 16px;
            font-weight: bold;
        }
    }

    // 요일 밑줄 제거
    .react-calendar__month-view__weekdays abbr {
        text-decoration: none;
    }

    // 토요일 텍스트 색
    .react-calendar__month-view__days__day--weekend {
        &:nth-child(7n) {
            color: #91d1ff;
        }
    }

    // 날짜 타일 스타일
    .react-calendar__tile {
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
            border-radius: 15%;
            border: 1px solid #91d1ff;
            background-color: transparent;
        }
    }

    // 오늘 날짜 표시
    .react-calendar__tile--now {
        background-color: #e0f7ff;
        border-radius: 15%;
    } 

    // 선택된 날짜 표시
    .react-calendar__tile.selected {
        background-color: #91d1ff;
        border-radius: 15%;
        // 토요일
        &:nth-child(7n) {
            color: white;
        }
    }
`;