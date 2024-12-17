const BASE_URL = 'http://localhost:3000';

const movieToUpdate = {
  genre: "Comedy",
  year: 1990,
};

function updateMovie(movieToUpdate, movieId) {
  const options = {
    method: 'PATCH',
    body: JSON.stringify(movieToUpdate),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  return fetch(`${BASE_URL}/movies/${movieId}`, options).then(response =>
    response.json()
  );
}

updateMovie(movieToUpdate, 3);
