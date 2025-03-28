import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName) => {
    if (taskName.trim() !== '') {
      const newTask = { id: Date.now(), name: taskName, completed: false };
      setTasks([...tasks, newTask]);
    }
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="container">
      <h1>Taskify - Task Management</h1>
      <div className="task-input">
        <input
          type="text"
          id="taskInput"
          placeholder="Add a new task..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') addTask(e.target.value);
          }}
        />
        <button onClick={() => addTask(document.getElementById('taskInput').value)}>
          Add Task
        </button>
      </div>
      <div className="filter-buttons">
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Completed')}>Completed</button>
        <button onClick={() => setFilter('Incomplete')}>Incomplete</button>
      </div>
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
