"use strict";


let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', ''); // первый вопрос

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { // пока это или это или это правда задаем тот же вопрос
		numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
	}
}

start();









const personalMovieDB = { // создаю объект для хранение данных юзера
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};




function rememberMyFilms() {
	for (let i = 0; i <= 1; i++) { // цикл с одним повтором вот этих двух вопросов. 
		let a1 = prompt('Один из последних просмотренных фильмов?', ''); // спрашиваю юзера в модальном окне
		let a2 = +prompt('Насколько оцените его?', '');

		if (a1 != null && a2 != null && a1 != '' && a2 != '' && a1.length < 50) { // проверяю чтобы не было путстой строки и тд
			personalMovieDB.movies[a1] = a2; // записываю данные в объект в объекте. а1 - ключ, а2 - значение
			console.log('done'); // в консоль вывожу - готово!
		} else { // если заполнил херово - заполняй заново
			console.log('Заполни форму');
			i--; // еще раз, до тех пор пока не заполнишь нормально 
		}
	}
}
rememberMyFilms();






function detectPersonalLevel() {
	if (personalMovieDB.count < 10) { // проверяю кол-во просмотренных фильмов (1 вопрос)
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
		console.log("Вы классический зритель");
	} else if (personalMovieDB.count > 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка!');
	}
}
detectPersonalLevel();



function showMyDB(hidden) { // при вызове передадим аргумент privat, который имеет значение фолс
	if (!hidden) { // если не фолс (меняет фолс на тру)
		console.log(personalMovieDB); // выводим в консоль весь объект
	}
}
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`, ``); // задаем 3 раза этот вопрос, записываем ответы в массив
	}
}
writeYourGenres();