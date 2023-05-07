"use strict";

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', ''); // первый вопрос

const personalMovieDB = { // создаю объект для хранение данных юзера
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

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

if (personalMovieDB.count < 10) { // проверяю кол-во просмотренных фильмов (1 вопрос)
	console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
	console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка!');
}


console.log(personalMovieDB); /* выведет - Титаник: 9.5 */








// first function
showFirstMessage(`первая функция на js`);

let num = 20;

function showFirstMessage(text) {
	console.log(text);
	let num = 10;
	console.log(num);
}


// console.log(calc(5, 3)); // вызывать можно до объявления

// function calc(a, b) {
// 	return (a + b);
// }







// three function
function ret() {
	let num = 50;
	return (num);
}
const anotherNum = ret(); // создаю переменную и присваиваю ей значение (то что возвращает функция ret())
console.log(anotherNum); // вывожу значение переменной в консоль 








// переменная с функцией
const logger = function () {
	console.log(`йоу`);

}; // обязательно ставлю ;
logger(); // вызвать можно только после объявления




const calc = (a, b) => a + b;