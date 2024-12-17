const BASE_URL = 'http://localhost:3000';

function deleteMovie(movieId) {
  const options = {
    method: 'DELETE',
  };
  return fetch(`${BASE_URL}/movies/${movieId}`, options).then(response =>
    response.json()
  );
}

deleteMovie(5);
