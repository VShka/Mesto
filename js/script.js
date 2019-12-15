/* Переменные */

const profile = document.querySelector('.profile');
const openPopup = profile.querySelector('.user-info__button');
const popupEditProfileBtn = profile.querySelector('.edit-profile__button');
const popupEditProfile = document.querySelector('.popup__edit-profile');
const placesList = document.querySelector('.places-list');
const placeCard = placesList.querySelector('.place-card');
const popup = document.querySelector('.popup');
const closePopup = popup.querySelector('.popup__close');
const closeEditProfile = document.querySelector('.popup__close_edit-profile');
const popupForm = document.forms.new;


/* Функции */


/* 1. Десять карточек «из коробки» */

// функция возвращает разметку карточки, которую впоследствии будем отрисовывать при загрузке страницы 

const getImgCard = function (obj) {
  return `<div class="place-card">
                <div class="place-card__image" style="background-image: url(${obj.link})">
                    <button class="place-card__delete-icon"></button>
                </div>
                <div class="place-card__description">
                    <h3 class="place-card__name">${obj.name}</h3>
                    <button class="place-card__like-icon"></button>
                </div>
          </div>`;
};

// отрисовка разметки карточки в html

const renderCard = function (obj) {
  const template = getImgCard(obj);
  placesList.insertAdjacentHTML('beforeend', template);
};

// перебор по массиву с коллбеком, который берет значения каждого элемента массива
const initialCardsToDisplay = function (arrCards) {
    arrCards.forEach(function (card) {
      renderCard(card);
    })
};
initialCardsToDisplay(initialCards);

/* 2. Открытие формы и 3. Закрытие формы */

// переключает класс и собственно открывает или закрывает форму

const openAndCloseForm = function () {
  popup.classList.toggle('popup_is-opened');
};
const openAndCloseEditForm = function () {
  popupEditProfile.classList.toggle('popup_is-opened');
};
/*const closePopupEditForm = function () {
  popupEditProfile.classList.remove('popup_is-opened');
}*/
/* 4. Лайк */


// делегирует собитие на все добавленные элементы и добавляет или убирает лайк

const likeHandler = function (event) {
  if (event.target.classList.contains('place-card__like-icon')) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }
};

/* 5. Добавление карточки */

// используем функцию getImgCard и добавляем элемент

const addCard = function (event, doneField) {
  // убрать перезагрузку страницы
  event.preventDefault();
  // нужно получить значения полей ввода
  const formName = popupForm.elements.name;
  const formLink = popupForm.elements.link;


  doneField({ name: formName.value, link: formLink.value });
  popup.classList.remove('popup_is-opened');
  popupForm.reset();
};


/* 6. Удаление карточки */

// делегирует, проверяет был ли клик внутри элемента place-card и удаляет элемент 

const deleteHandler = function () {
  const placeCard = event.target.closest('.place-card')
  if (event.target.classList.contains('place-card__delete-icon')) {
    placesList.removeChild(placeCard);
  }
};

/* Слушатели событий  */

// открытие и закрытие форм
openPopup.addEventListener('click', openAndCloseForm);
closePopup.addEventListener('click', openAndCloseForm);
popupEditProfileBtn.addEventListener('click', openAndCloseEditForm);
closeEditProfile.addEventListener('click', openAndCloseEditForm);

//
placesList.addEventListener('click', likeHandler);
placesList.addEventListener('click', deleteHandler);
popupForm.addEventListener('submit', function (event) {
  addCard(event, renderCard);
})

/**
 * Здравствуйте
 * Очень хорошая работа. Не ожидал
 *
 * Правильно что используете делегирование
 *
 * Хорошо что используете preventDefault()
 *
 *
 *
 */