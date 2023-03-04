/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
   movies: [
      'Логан',
      'Лига справедливости',
      'Ла-ла лэнд',
      'Одержимость',
      'Скотт Пилигрим против...',
   ],
};

const adv = document.querySelectorAll('.promo__adv img');
const gener = document.querySelector('.promo__genre');
const backGround = document.querySelector('.promo__bg');
const moviList = document.querySelector('.promo__interactive-list');
const rating = document.querySelector('.promo__ratings');

adv.forEach((item) => {
   item.remove();
});

gener.textContent = 'драма';

rating.childNodes[3].textContent = 'Кинопоиск: 7.8';

backGround.style.backgroundImage = "url('img/bg.jpg')";

moviList.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((item, i) => {
   moviList.innerHTML += `
    <li class="promo__interactive-item"> ${i + 1} ${item}
        <div class="delete"></div>
    </li>
    `;
});
