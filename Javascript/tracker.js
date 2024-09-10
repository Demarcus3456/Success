const animeBtn = document.querySelector(".anime-btn");
const anime = document.getElementById("anime");
const movieBtn = document.querySelector(".movies-btn");
const movies = document.getElementById("movies");
const gamesBtn = document.querySelector(".games-btn");
const games = document.getElementById("games");
const mangaBtn = document.querySelector(".manga-btn");
const manga = document.getElementById("manga");

/* Opens anime tracker */
animeBtn.addEventListener("click", function () {
  anime.classList.remove("hidden");
  movies.classList.add("hidden");
  games.classList.add("hidden");
  manga.classList.add("hidden");
});

/* Opens movie tracker */
movieBtn.addEventListener("click", function () {
  movies.classList.remove("hidden");
  anime.classList.add("hidden");
  games.classList.add("hidden");
  manga.classList.add("hidden");
});

/* Opens games tracker */
gamesBtn.addEventListener("click", function () {
  games.classList.remove("hidden");
  anime.classList.add("hidden");
  movies.classList.add("hidden");
  manga.classList.add("hidden");
});

/* Opens manga tracker */
mangaBtn.addEventListener("click", function () {
  manga.classList.remove("hidden");
  anime.classList.add("hidden");
  movies.classList.add("hidden");
  games.classList.add("hidden");
});
