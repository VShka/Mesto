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

// активация и дезактивация кнопки -------------
popupForm.addEventListener('input', disableBtnForm);