import React, { useEffect, useState } from 'react';
import { getCharacters } from '../api/swapi';
import "./../css/Characters.css";

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
<div className="container my-4">
      <h1 className="text-center mb-4">Star Wars Characters</h1>
      <div className="d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {characters.map((character, index) => (
            <div key={index} className="col">
              <div className="card h-100 shadow-sm card-hover">
                <div className="card-body">
                  <h5 className="card-title text-center">{character.name}</h5>
                  <ul className="list-unstyled">
                    <li>
                      <strong>Height:</strong> {character.height} cm
                    </li>
                    <li>
                      <strong>Mass:</strong> {character.mass} kg
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

export default Characters;
