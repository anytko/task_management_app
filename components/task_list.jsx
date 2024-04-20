import React, { useState } from 'react';
import './task_list.css';
import AddTaskComponent from './add_task'; 
import { CloseButton } from 'react-bootstrap';

function TaskList({ date, onClose}) {
    const [tasks, setTasks] = useState([]);
    const [showAddTask, setShowAddTask] = useState(false);

    const handleToggleAddTask = () => {
        setShowAddTask(!showAddTask);
    };

    const handleAddTask = (taskName) => {
        // Add the task to the task list with its corresponding date
        setTasks([...tasks, { taskName: taskName, date: date, completed: false }]);
        setShowAddTask(false); // Hide the AddTaskComponent after adding the task
    };

    const handleCheckboxChange = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const handleDeleteTask = (index) => {
        const newTasks = [...completedTasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };


    // Filter tasks for the current date
    const tasksForDate = tasks.filter(task => task.date.toDateString() === date.toDateString());

    // Separate tasks by completion status
    const incompleteTasks = tasksForDate.filter(task => !task.completed);
    const completedTasks = tasksForDate.filter(task => task.completed);


    return (
        <>
            <div className='big_task"'>
            <CloseButton onClick={onClose} className="close-btn">
            <span className='x_span' aria-hidden="true">X</span>
            </CloseButton>
                <h2 className="task_list_title">Today's Task List
                </h2>
                
                <h3 className="current_tasks">Current Tasks:</h3>
                <ul className="task-list">
                    {incompleteTasks.map((task, index) => (
                        <li key={index}>
                            <input
                                type="checkbox"
                                checked={task.completed || false}
                                onChange={() => handleCheckboxChange(tasks.indexOf(task))}
                            />
                            {task.taskName}
                            <button className="delete_button" onClick={() => handleDeleteTask(index)}>Delete</button>
                        </li>
                    ))}
                </ul>

                <h3 className="past_tasks">Past Tasks:</h3>
                <ul className="task-list">
    {completedTasks.map((task, index) => (
        <li className="strikeout" key={index}>
            <input
                type="checkbox"
                checked={task.completed || false}
                onChange={() => handleCheckboxChange(tasks.indexOf(task))}
            />
            {task.taskName}
            <button className="delete_button" onClick={() => handleDeleteTask(index)}>Delete</button>
        </li>
    ))}
</ul>

                {/* Task list items */}
                <button onClick={handleToggleAddTask}>Add Task</button>
                {/* Render AddTaskComponent if showAddTask is true */}
                {showAddTask && <AddTaskComponent date={date} onTaskAdd={handleAddTask} onClose={() => setShowAddTask(false)}/>}
            </div>
        </>
    );
}

export default TaskList;