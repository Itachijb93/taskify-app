import React from 'react';

function Task({ task, toggleTask, deleteTask }) {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTask(task.id)}>{task.name}</span>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
        X
      </button>
    </div>
  );
}

export default Task;
