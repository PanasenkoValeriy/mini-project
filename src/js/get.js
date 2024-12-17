const allBtn = document.getElementById('all-button');
const moviesList = document.getElementById('movies__container');

allBtn.addEventListener('click', onAllBtnClick);

const BASE_URL = 'http://localhost:3000';

function fetchMovies() {
  return fetch(`${BASE_URL}/movies`).then(r => r.json());
}

function onAllBtnClick() {
  fetchMovies().then(renderMovies);
}

function renderMovies(movies) {
  const markUp = movies
    .map(
      movie => `<li class="movies__item">
                <div>
                    <img class="movies__image" src="${movie.image}" alt="#" onerror="this.src='https://via.placeholder.com/150';">
                    <h2 class="movies__title"><b>Title: </b>${movie.title}</h2>
                    <p class="movies__genre"><b>Genre: </b>${movie.genre}</p>
                    <p class="movies__year"><b>Year: </b>${movie.year}</p>
                </div>
                <div>
                    <button class="movies__item-btn" type="button" id="edit__btn">edit</button>
                    <button class="movies__item-btn" type="button" id="delete__btn">delete</button>
                </div>
            </li>`
    )
    .join('');

  moviesList.insertAdjacentHTML('beforeend', markUp);
}
