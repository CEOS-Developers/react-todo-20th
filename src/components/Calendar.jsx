import React from 'react';
import BasicCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendar = ({ currentDate, onDateChange }) => {
    return (
        <div>
            <BasicCalendar 
                value={currentDate}
                onChange={onDateChange}
            />
        </div>
    );
};

export default Calendar;