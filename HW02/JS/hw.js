'use strict';
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let q1, q2;
// Вариант 1
// for (let i = 1; i <= 2; i++) {
//     do {
//         q1 = prompt("Один из последних просмотренных фильмов?","");
//         q2 = prompt("На сколько оцените его?","");
//     } while (q1 == null || q2 == null || q1.length == 0 || q2.length == 0 || q1.length > 50 || q2.length > 50);
    
//     personalMovieDB.movies[q1] = q2;
// }

// Вариант 2
const MOVIE_COUNT = 50;
for (let i = 1; i <= 2; i++) {
    do {
        q1 = prompt("Один из последних просмотренных фильмов?","");
        q2 = prompt("На сколько оцените его?","");
    } while (
        !Boolean(q1 || q1.length) ||
        !Boolean(q2 || q2.length) ||
        q1.length > MOVIE_COUNT ||
        q2.length > MOVIE_COUNT
    );
    
    personalMovieDB.movies[q1] = q2;
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Вы классический зритель");
}

console.log(personalMovieDB);

var x = -100 / "H";
console.log(x);
console.log(Boolean(x));
