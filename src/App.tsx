import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Characters from './pages/characters';
import Movies from './pages/movies';
import Starships from './pages/starships';
import Planets from './pages/planets';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/starships" element={<Starships />} />
      </Routes>
    </Router>
  );
};

export default App



