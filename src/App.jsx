import { useState } from 'react'
import './App.css'
import CalendarComponent from '../components/calendar.jsx';
import Calendar from 'react-calendar'
import AddTaskComponent from '../components/add_task.jsx'
import TaskList from '../components/task_list.jsx'
import '../components/calendar.css';



function App() {
  const [date, setDate] = useState(new Date());
  const [showTaskList, setShowTaskList] = useState(false);

  const handleDateChange = newDate => {
    setDate(newDate);
    setShowTaskList(true); // Show TaskList when a new date is selected
  };

  return (
    <div className='app'>
      <div className='calendar-container'>
        <Calendar onChange={handleDateChange} value={date} />
      </div>
      {showTaskList && <TaskList date={date} />} {/* Render TaskList if showTaskList is true */}
    </div>
  );
}

export default App
