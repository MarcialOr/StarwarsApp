import React, { useEffect, useState } from 'react';
import { getStarships } from '../api/swapi';
import "./../css/Characters.css";

interface Starship {
  name: string;
  model: string;
  manufacturer: string;
}

const Starships: React.FC = () => {
  const [starships, setStarships] = useState<Starship[]>([]);

  useEffect(() => {
    getStarships().then((data) => setStarships(data));
  }, []);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Starships</h1>
      <div className="d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {starships.map((starship, index) => (
            <div key={index} className="col">
              <div className="card h-100 shadow-sm card-hover">
                <div className="card-body">
                  <h5 className="card-title text-center">{starship.name}</h5>
                  <ul className="list-unstyled">
                    <li>
                      <strong>Modelo:</strong> {starship.model}
                    </li>
                    <li>
                      <strong>Fabricante:</strong> {starship.manufacturer}
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

export default Starships;
