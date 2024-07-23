import React from 'react';
import { useParams, Link } from 'react-router-dom';

const TaskDetail = ({ tasks }) => {
  const { id } = useParams();
  const task = tasks.find(task => task.id === parseInt(id));

  if (!task) return <div>Task not found</div>;

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <Link to={`/ToDoList/edit/${task.id}`}>Edit Task</Link>
      <Link to="/ToDoList">Back to Task List</Link>
    </div>
  );
};

export default TaskDetail;
