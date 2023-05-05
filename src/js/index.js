"use strict";

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


let a1 = prompt('Один из последних просмотренных фильмов?', '');
let a2 = +prompt('Насколько оцените его?', '');

let a3 = prompt('Один из последних просмотренных фильмов?', '');
let a4 = +prompt('Насколько оцените его?', '');


personalMovieDB.movies[a1] = a2;
personalMovieDB.movies[a3] = a4;

console.log(personalMovieDB);