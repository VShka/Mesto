/* Переменные */

const profile = document.querySelector('.profile');
const popupForm = document.forms.new;
const placeCard = document.querySelector('.place-card');
const [formName, formLink] = popupForm.elements;
const btnAddPlace = document.querySelector('.btn__add-place');



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
// активация и дезактивация кнопки -------------
popupForm.addEventListener('input', disableBtnForm);