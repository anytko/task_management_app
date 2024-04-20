// AddTaskComponent.jsx
import React, { useState } from 'react';
import { CloseButton } from 'react-bootstrap';

function AddTaskComponent({ onTaskAdd, onClose}) {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the onTaskAdd function and pass the task name
        onTaskAdd(taskName);
        // Reset form field after submission
        setTaskName('');
    };

    return (
        <div>
            <h3>Add Task</h3>
            <CloseButton onClick={onClose} className="close-btn" />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="taskName">Task Name:</label>
                    <input
                        type="text"
                        id="taskName"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
      
        </div>
    );
}

export default AddTaskComponent;