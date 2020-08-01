"use strict";
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

// IF
const num = 50;

if (num < 50) {
    console.log("Error");
} else if (num > 50) {
    console.log("Много");
} else {
    console.log("OK!");
}

// тернарный оператор
const num = 50;
(num === 50) ? console.log("OK!") : console.log("Error");

// SWITCH
const num = 51;
switch (num) {
    case 49: 
        console.log("Error");
        break; //прерывание дальнейших проверок
    case 100:
        console.log("Error");
        break; //прерывание дальнейших проверок
    case 50: 
        console.log("OK");
        break; //прерывание дальнейших проверок
    default:
        console.log("Ничего не подошло");
        break; //прерывание дальнейших проверок
}

// ЦИКЛЫ
let num = 50;
while ( num < 55) {
    console.log(num);
    num++;
}

let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55);


for (let i = 1; i < 8; i++) {
    if (i === 6) {
        continue; //пропуск 6-го шага
    }
    console.log(i);
}
