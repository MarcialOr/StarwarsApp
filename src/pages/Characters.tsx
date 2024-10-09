import React, { useEffect, useState } from 'react';
import { getCharacters } from '../api/swapi';

interface Character {
  name: string;
  height: string;
  mass: string;
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    getCharacters().then((data) => setCharacters(data));
  }, []);

  return (
    <div>
      <h2>Personajes</h2>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>
            <p>Nombre: {character.name}</p>
            <p>Altura: {character.height}</p>
            <p>Peso: {character.mass}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Characters;
