let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

// numberOfFilms = 100;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// personalMovieDB.count = numberOfFilms;

let q1 = prompt("Один из последних просмотренных фильмов?",""),
    q2 = prompt("На сколько оцените его?",""),
    q3 = prompt("Один из последних просмотренных фильмов?",""),
    q4 = prompt("На сколько оцените его?","");


personalMovieDB.movies[q1] = q2;
personalMovieDB.movies[q3] = q4;

console.log(personalMovieDB);

