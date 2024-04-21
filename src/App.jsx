import { useState } from 'react'
import './App.css'
import CalendarComponent from '../components/calendar.jsx';
import Calendar from 'react-calendar'
import AddTaskComponent from '../components/add_task.jsx'
import TaskList from '../components/task_list.jsx'
import '../components/calendar.css';
import NavBar from '../components/nav_bar.jsx';
import ContactForm from '../components/contact.jsx';
import {Route, Routes} from 'react-router-dom'




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
    setShowTaskList(false);
};

return (
  <div className="app">
    <NavBar/> 
    <Routes>  
      <Route
        path="/"
        element={
          <div className="calendar-container">
            <Calendar onChange={handleDateChange} value={date} />
            {/* Render TaskList only if showTaskList is true */}
            {showTaskList && <TaskList date={date} taskNames={taskNames} onClose={handleCloseTaskList} onAddTask={() => setShowTaskList(true)} className="task-list"/>}
          </div>
        }
      />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
  </div>
);
}

export default App;