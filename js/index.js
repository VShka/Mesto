// экземпляр карточки
const card = new Card();

// контейнер для CardList
const placesList = document.querySelector('.places-list');
// экземпляр контейнера 
const cardList = new CardList(placesList, card);

// экземпляр класса действия с формой
const formAction = new FormAction(popupForm);

// контейнер попап добавления карточки
const popupTypePlace = document.querySelector('.popup_type_place');
// экземпляр класса Popup для формы добавления карточки
const placePopup = new Popup(
  popupTypePlace,
  'user-info__button',
  popupTypePlace
);

// контейнер попап редактирования профиля
const popupEditProfile = document.querySelector('.popup__edit-profile');
// экземпляр класса Popup для профиля
const editPopup = new Popup(
  popupEditProfile,
  'edit-profile__button',
  popupEditProfile
);

// контейнер попап картинки 
const popupTypeImage = document.querySelector('.popup_type_image');
// экземпляр класса Popup для картинки
const imagePopup = new Popup(
  popupTypeImage,
  'place-card__image',
  popupTypeImage
);


/* методы работы с карточками */


// передаем методу массив карточек и отрисовываем при загрузке в нашем контейнере
cardList.render(initialCards);

// добавляем 1 карточку
popupForm.addEventListener('submit', (event) => {
    //добавление карточки
  cardList.addCardForm();
    //сброс дефолтного поведения формы
  formAction.preventDefault(event);
    //сброс полей формы после сабмита
  formAction.resetFormFields();
    //закрытие попапа после сабмита
  placePopup.close(event);
});