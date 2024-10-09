import React, { useEffect, useState } from 'react';
import { getMovies } from '../api/swapi';
import "./../css/Characters.css";

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
<div className="container my-4">
 <h1 className="text-center mb-4">Star Wars Movies</h1>
  <div className="d-flex justify-content-center">
    <div className="row row-cols-1 row-cols-md-3 g-4">
     {movies.map((movie, index) => (
      <div key={index} className="col">
        <div className="card h-100 shadow-sm card-hover">
          <div className="card-body">
            <h5 className="card-title text-center">{movie.title}</h5>
            <ul className="list-unstyled">
              <li>
                <strong>Height:</strong> {movie.director} cm
              </li>
              <li>
                <strong>Mass:</strong> {movie.release_date} kg
              </li>
            </ul>
          </div>
        </div>
      </div>
     ))}
    </div>
   </div>
  </div>
  );
};

export default Movies;
