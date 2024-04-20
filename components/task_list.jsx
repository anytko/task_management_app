import React, { useState } from 'react';
import './task_list.css';
import AddTaskComponent from './add_task'; 

function TaskList({ date }) {
    const [tasks, setTasks] = useState([]);
    const [showAddTask, setShowAddTask] = useState(false);

    const handleToggleAddTask = () => {
        setShowAddTask(!showAddTask);
    };

    const handleAddTask = (taskName) => {
        // Add the task to the task list with its corresponding date
        setTasks([...tasks, { taskName: taskName, date: date }]);
        setShowAddTask(false); // Hide the AddTaskComponent after adding the task
    };

    const handleCheckboxChange = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    return (
        <>
            <div>
                <h2 className="task_list_title">Today's Task List</h2>
                <ul className="task-list">
            {tasks
                .filter(task => task.date.toDateString() === date.toDateString())
                .map((task, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={task.completed || false}
                            onChange={() => handleCheckboxChange(index)}
                        />
                        {task.taskName}
                    </li>
                ))}
          </ul>
                {/* Task list items */}
                <button onClick={handleToggleAddTask}>Add Task</button>
                {/* Render AddTaskComponent if showAddTask is true */}
                {showAddTask && <AddTaskComponent date={date} onTaskAdd={handleAddTask} />}
            </div>
        </>
    );
}


export default TaskList;


