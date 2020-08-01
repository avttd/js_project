'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
    }
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {

    const MOVIE_COUNT = 50;
    let q1, q2;

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
}

function detectPersonalLevel() {

    if (personalMovieDB.count < 10) {
        console.log("Просмотрено мало фильмов");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Вы классический зритель");
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
    // if (personalMovieDB.privat == false) {
    //     console.log(personalMovieDB);
    // }
}

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
    console.log(personalMovieDB.genres);
}

// start();
// rememberMyFilms();
// detectPersonalLevel();

// console.log(personalMovieDB);

showMyDB(personalMovieDB.privat);
writeYourGenres();
