// AddTaskComponent.jsx
import React, { useState } from 'react';
import { CloseButton } from 'react-bootstrap';
import '../components/task_list.css'

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
            <div className='title_x'>
            <h3>Add Task </h3>
            <CloseButton onClick={onClose} className="close-btn">
            <span className='x_span' aria-hidden="true">X</span>
            </CloseButton>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='add_task_form_element'>
                    <label className='add_task_form_label' htmlFor="taskName">Task Name:</label>
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