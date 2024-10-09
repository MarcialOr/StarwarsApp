import React, { useEffect, useState } from 'react';
import { getStarships } from '../api/swapi';

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
    <div>
      <h2>Naves</h2>
      <ul>
        {starships.map((starship, index) => (
          <li key={index}>
            <p>Nombre: {starship.name}</p>
            <p>Modelo: {starship.model}</p>
            <p>Fabricante: {starship.manufacturer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Starships;
