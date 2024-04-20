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
  const [taskNames, setTaskNames] = useState([]);

  const handleDateChange = newDate => {
    setDate(newDate);
    setShowTaskList(true); // Show TaskList when a new date is selected
  };

  const handleTaskAdd = (taskName) => {
    setTaskNames([...taskNames, taskName]);
  };

  const handleCloseTaskList = () => {
    // Implement logic to close the TaskList component
    // For example, you can set a state to hide the TaskList
    setShowTaskList(false);
};

  return (
    <div className="app">
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={date} />
      </div>
      {/* Render TaskList only if showTaskList is true */}
      <div>
      {showTaskList && <TaskList date={date} taskNames={taskNames} onClose={() => setShowTaskList(false)} onAddTask={() => setShowTaskList(true)} />}
      </div>
      {/* Pass date and handleTaskAdd function to AddTaskComponent */}
    </div>
  );
}

export default App;

