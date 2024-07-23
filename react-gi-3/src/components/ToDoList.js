import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const buttonStyle = {
  border: '1px solid black',
  color: 'black',
  padding: '5px 10px',
  margin: '5px',
  cursor: 'pointer',
  backgroundColor: 'white',
};

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask({ title });
      setTitle('');
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Add new task" 
        />
        <button type="submit" style={buttonStyle}>Add Task</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Link to={`/ToDoList/${task.id}`} style={{ color: 'black', textDecoration: 'none' }}>{task.title}</Link>
            <button onClick={() => deleteTask(task.id)} style={buttonStyle}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TaskDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/ToDoList');
  };

  return (
    <div>
      <h2>Task Detail</h2>
      <p>Task ID: {id}</p>
      <button onClick={handleBack} style={buttonStyle}>Back to List</button>
    </div>
  );
};

export { ToDoList, TaskDetail };
