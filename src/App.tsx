import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Characters from './pages/Characters';
import Movies from './pages/Movies';
import Starships from './pages/Starships';
import Planets from './pages/Planets';


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



