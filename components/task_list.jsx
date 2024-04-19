import React from 'react'
import './task_list.css';

function TaskList({ date }) {
    return (
      <div>
        <h2 className = "task_list_title"> Today's Task List</h2>
        <h2>{date.toDateString()}</h2>
      </div>
    );
  }

export default TaskList
