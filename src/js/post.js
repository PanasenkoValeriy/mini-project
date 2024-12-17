const BASE_URL = 'http://localhost:3000';

const movieToAdd = {
  title: 'Minions',
  genre: 'Comedy',
  director: 'Pierre Coffin',
  year: 2015,
};

const options = {
  method: 'POST',
  body: JSON.stringify(movieToAdd),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

function addMovie(newmovie) {
  return fetch(`${BASE_URL}/movies`, options).then(response => response.json());
}

addMovie(movieToAdd);
