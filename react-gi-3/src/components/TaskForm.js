import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = ({ tasks, setTasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = id !== undefined;
  const existingTask = tasks.find(task => task.id === parseInt(id));
  
  const [title, setTitle] = useState(existingTask ? existingTask.title : '');
  const [description, setDescription] = useState(existingTask ? existingTask.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      setTasks(tasks.map(task => task.id === parseInt(id) ? { id: parseInt(id), title, description } : task));
    } else {
      const newTask = { id: tasks.length + 1, title, description };
      setTasks([...tasks, newTask]);
    }
    navigate('/ToDoList');
  };

  return (
    <div>
      <h1>{isEdit ? 'Edit Task' : 'Add Task'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description</label>
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <button type="submit">{isEdit ? 'Update Task' : 'Add Task'}</button>
      </form>
    </div>
  );
};

export default TaskForm;
