import React, { useEffect, useState } from 'react';
import { getMovies } from '../api/swapi';

interface Movie {
  title: string;
  director: string;
  release_date: string;
}

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies().then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <h2>Películas</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <p>Título: {movie.title}</p>
            <p>Director: {movie.director}</p>
            <p>Fecha de lanzamiento: {movie.release_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
