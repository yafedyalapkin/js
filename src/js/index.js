"use strict";



const personalMovieDB = { // создаю объект для хранение данных юзера
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,

	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', ''); // первый вопрос

		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) { // пока это или это или это правда задаем тот же вопрос
			personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
		}
	},

	rememberMyFilms: function () {
		for (let i = 0; i <= 1; i++) { // цикл с одним повтором вот этих двух вопросов. 
			let a1 = prompt('Один из последних просмотренных фильмов?', '').trim(); // спрашиваю юзера в модальном окне
			let a2 = +prompt('Насколько оцените его?', '');

			if (a1 != null && a2 != null && a1 != '' && a2 != '' && a1.length < 50) { // проверяю чтобы не было путстой строки и тд
				personalMovieDB.movies[a1] = a2; // записываю данные в объект в объекте. а1 - ключ, а2 - значение
				console.log('done'); // в консоль вывожу - готово!
			} else { // если заполнил херово - заполняй заново
				console.log('Заполни форму');
				i--; // еще раз, до тех пор пока не заполнишь нормально 
			}
		}
	},

	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) { // проверяю кол-во просмотренных фильмов (1-ый вопрос)
			console.log("Просмотрено довольно мало фильмов");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
			console.log("Вы классический зритель");
		} else if (personalMovieDB.count > 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка!');
		}
	},

	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) { // изначально тру
			personalMovieDB.privat = false; // меняем на тру
		} else {
			personalMovieDB.privat = true;
		}

	},

	showMyDB: function (hidden) { // при вызове передадим аргумент privat, который имеет значение фолс
		if (!hidden) { // если не фолс (меняет фолс на тру)
			console.log(personalMovieDB); // выводим в консоль весь объект
		}
	},

	writeYourGenres: function () {

		for (let i = 1; i <= 3; i++) {
			let genre = prompt(`Ваш любимый жанр под номером ${i}?`, ``); // задаем 3 раза этот вопрос, 

			if (genre === '' || genre === null) {
				console.log('Вы ввели некорректные данные');
				i--;
			}
			personalMovieDB.genres[i - 1] = genre; // записываем ответы в массив
		};

		personalMovieDB.genres.forEach((item, i) => { // стрелочная функция
			console.log(`Любимый жанр ${i+1} - это ${item}`); // это уже другая i и у нее свой счет
		});
	}
};