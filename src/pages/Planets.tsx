import React, { useEffect, useState } from 'react';
import { getPlanets } from '../api/swapi';
import "./../css/Characters.css";

interface Planet {
  name: string;
  climate: string;
  population: string;
}

const Planets: React.FC = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    getPlanets().then((data) => setPlanets(data));
  }, []);

  return (
    
    <div className="container my-4">
      <h1 className="text-center mb-4">Planets</h1>
      <div className="d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {planets.map((planet, index) => (
            <div key={index} className="col">
              <div className="card h-100 shadow-sm card-hover">
                <div className="card-body">
                  <h5 className="card-title text-center">{planet.name}</h5>
                  <ul className="list-unstyled">
                    <li>
                      <strong>Clima:</strong> {planet.climate}
                    </li>
                    <li>
                      <strong>Población:</strong> {planet.population}
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

export default Planets;
