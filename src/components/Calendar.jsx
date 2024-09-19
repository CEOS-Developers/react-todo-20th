import React from 'react';
import BasicCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const Calendar = ({ currentDate, onDateChange }) => {
    return (
        <MainContainer>
            <BasicCalendar 
                value={currentDate}
                onChange={onDateChange}
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
    width: 60%;
    min-width: 530px;
    margin-top: 20%;
`;