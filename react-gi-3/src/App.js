import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Counter from './components/counter';
import Movie from './components/movie';
import MovieDetail from './components/moviedetail';
import { ToDoList, TaskDetail } from './components/ToDoList';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Counter />} />
          <Route path='/movie' element={<Movie />} />
          <Route path='/movie/:id' element={<MovieDetail />} />
          <Route path='/ToDoList' element={<ToDoList />} />
          <Route path='/ToDoList/:id' element={<TaskDetail />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
