import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Counter from './components/counter';
import Movie from './components/movie';
import MovieDetail from './components/moviedetail';
import ToDoList from './components/ToDoList';
import TaskDetail from './components/TaskDetail';
import TaskForm from './components/TaskForm';

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description 1' },
    { id: 2, title: 'Task 2', description: 'Description 2' },
  ]);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/ToDoList" element={<ToDoList tasks={tasks} setTasks={setTasks} />} />
          <Route path="/ToDoList/add" element={<TaskForm tasks={tasks} setTasks={setTasks} />} />
          <Route path="/ToDoList/:id" element={<TaskDetail tasks={tasks} />} />
          <Route path="/ToDoList/edit/:id" element={<TaskForm tasks={tasks} setTasks={setTasks} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
