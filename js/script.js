/* Переменные */

const profile = document.querySelector('.profile');
const openPopup = profile.querySelector('.user-info__button');
const placesList = document.querySelector('.places-list');
const placeCard = document.querySelector('.place-card');
const popup = document.querySelector('.popup');
const closePopup = popup.querySelector('.popup__close');
const popupForm = document.forms.new;
const [formName, formLink] = popupForm.elements;
const btnAddPlace = document.querySelector('.btn__add-place');


/* Функции */


/* 1. Десять карточек «из коробки» */

// функция возвращает разметку карточки, которую впоследствии будем отрисовывать при загрузке страницы 
// const getImgCard = function (obj) {
//   return `<div class="place-card">
//                 <div class="place-card__image" style="background-image: url(${obj.link})">
//                     <button class="place-card__delete-icon"></button>
//                 </div>
//                 <div class="place-card__description">
//                     <h3 class="place-card__name">${obj.name}</h3>
//                     <button class="place-card__like-icon"></button>
//                 </div>
//           </div>`;
// };

// // отрисовка разметки карточки в html
// const renderCard = function (obj) {
//   const template = getImgCard(obj);
//   placesList.insertAdjacentHTML('beforeend', template);
// };

// // перебор по массиву с коллбеком, который берет значения каждого элемента массива и отрисовывает карточки
// // при загрузке страницы
// const initialCardsToDisplay = function (arrCards) {
//     arrCards.forEach(function (card) {
//       renderCard(card);
//     })
// };
// initialCardsToDisplay(initialCards);

/* 2. Открытие формы и 3. Закрытие формы */

// переключает класс и собственно открывает или закрывает форму
const openAndCloseForm = function () {
  popup.classList.toggle('popup_is-opened');
};
const closeFormEsc = function (event) {
  if(event.key === 'Escape') {
    popup.classList.remove('popup_is-opened');
  }
};

/* 5. Добавление карточки */

// используем функцию getImgCard и добавляем элемент
// const addCard = function (event, doneField) {
//   event.preventDefault();

//   const formName = popupForm.elements.name;
//   const formLink = popupForm.elements.link;

//   doneField({ name: formName.value, link: formLink.value });
//   popup.classList.remove('popup_is-opened');
//   popupForm.reset();

//   btnAddPlace.setAttribute('disabled', true);
//   btnAddPlace.classList.add('popup__button_disabled');
// };


/* Валидация кнопки*/

const disableBtnForm = function() {
  if(formName.value.length === 0 || formLink.value.length === 0) {
    btnAddPlace.setAttribute('disabled', true);
    btnAddPlace.classList.add('popup__button_disabled')
  } else {
    btnAddPlace.removeAttribute('disabled');
    btnAddPlace.classList.remove('popup__button_disabled');
  }
};

/* Слушатели событий  */

// открытие и закрытие форм
openPopup.addEventListener('click', openAndCloseForm);
closePopup.addEventListener('click', openAndCloseForm);
document.addEventListener('keydown', closeFormEsc);

// добавление карточки
popupForm.addEventListener('submit', function (event) {
  addCard(event, renderCard);
}) 

// активация и дезактивация кнопки -------------
popupForm.addEventListener('input', disableBtnForm);