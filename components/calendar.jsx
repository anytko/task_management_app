
import React from 'react'
import Calendar from 'react-calendar';


function CalendarComponent(props) {
    const { date, onDateChange, tasks } = props;
  
    const tileContent = ({ date, view }) => {
      if (view === 'month') {
        const dateKey = date.toISOString().split('T')[0];
        const tasksForDate = tasks[dateKey] || [];
        return tasksForDate.length > 0 ? <div>{tasksForDate.length}</div> : null;
      }
      return null;
    };
  
    return (
      <div>
        <Calendar value={date} onChange={onDateChange} tileContent={tileContent} />
      </div>
    );
  }
  
  export default CalendarComponent;

