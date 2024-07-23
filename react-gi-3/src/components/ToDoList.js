import React from 'react';
import { Link } from 'react-router-dom';
import './ToDoList.css';

const ToDoList = ({ tasks, setTasks }) => {
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>Task List</h1>
      <Link to="/ToDoList/add" className="add-task-btn">Add Task</Link>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <Link to={`/ToDoList/${task.id}`} className="task-title">{task.title}</Link>
            <button 
              onClick={() => deleteTask(task.id)} 
              className="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

