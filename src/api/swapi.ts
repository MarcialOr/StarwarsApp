import axios from 'axios';

export const getCharacters = async () => {
  const response = await axios.get('https://swapi.dev/api/people/');
  return response.data.results;
};

export const getPlanets = async () => {
  const response = await axios.get('https://swapi.dev/api/planets/');
  return response.data.results;
};

export const getMovies = async () => {
  const response = await axios.get('https://swapi.dev/api/films/');
  return response.data.results;
};

export const getStarships = async () => {
  const response = await axios.get('https://swapi.dev/api/starships/');
  return response.data.results;
};
