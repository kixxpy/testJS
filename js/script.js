// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
// "Добавляем любимый фильм"

// 5) Фильмы должны быть отсортированы по алфавиту
'use strict';
document.addEventListener('DOMContentLoaded', () => {
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
   const addForm = document.querySelector('form.add');
   const addInput = document.querySelector('.adding__input');
   const checkbox = document.querySelector('[type="checkbox"]');

   addForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let newFilm = addInput.value;
      const favorite = checkbox.checked;

      if (newFilm) {
         if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`;
         }
         if (favorite) {
            console.log('Добавляем любимый фильм');
         }
         movieDB.movies.push(newFilm);
         sortArr(movieDB.movies);
         creatMovieList(movieDB.movies, moviList);
      }
      e.target.reset();
   });

   const deleteAdv = (arr) => {
      arr.forEach((item) => {
         item.remove();
      });
   };

   const makeChanges = () => {
      gener.textContent = 'драма';

      rating.childNodes[3].textContent = 'Кинопоиск: 7.8';

      backGround.style.backgroundImage = "url('img/bg.jpg')";
   };

   const sortArr = (arr) => {
      arr.sort();
   };

   function creatMovieList(films, parent) {
      parent.innerHTML = '';
      sortArr(films);
      films.forEach((item, i) => {
         parent.innerHTML += `
       <li class="promo__interactive-item"> ${i + 1} ${item}
           <div class="delete"></div>
       </li>
       `;
      });
      const deleteElement = document
         .querySelectorAll('.delete')
         .forEach((btn, i) => {
            btn.addEventListener('click', () => {
               btn.parentElement.remove();
               movieDB.movies.splice(i, 1);
               creatMovieList(films, parent);
            });
         });
   }

   deleteAdv(adv);
   makeChanges();
   creatMovieList(movieDB.movies, moviList);
});
