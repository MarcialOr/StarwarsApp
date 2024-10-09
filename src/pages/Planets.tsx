import React, { useEffect, useState } from 'react';
import { getPlanets } from '../api/swapi';

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
    <div>
      <h2>Planetas</h2>
      <ul>
        {planets.map((planet, index) => (
          <li key={index}>
            <p>Nombre: {planet.name}</p>
            <p>Clima: {planet.climate}</p>
            <p>Población: {planet.population}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Planets;
