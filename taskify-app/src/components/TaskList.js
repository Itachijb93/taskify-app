import React from 'react';
import Task from './task';

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks found. Add some tasks!</p>
      ) : (
        tasks.map((task) => (
          <Task key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
        ))
      )}
    </div>
  );
}

export default TaskList;
