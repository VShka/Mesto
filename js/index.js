// экземпляр карточки
const card = new Card();

// контейнер для CardList
const placesList = document.querySelector('.places-list');
// экземпляр контейнера 
const cardList = new CardList(placesList, card, initialCards);

// передаем методу массив карточек и отрисовываем при загрузке в нашем контейнере
cardList.render();

// экземпляр класса действия с формой
const formAction = new FormAction(popupForm);

// контейнер попап добавления карточки
const popupTypePlace = document.querySelector('.popup_type_place');
// кнопка открытия попапа place
const btnOpenPlace = document.querySelector('.user-info__button');
// экземпляр класса Popup для формы добавления карточки
const placePopup = new Popup(
  popupTypePlace,
  'user-info__button',
  popupTypePlace,
  btnOpenPlace
);

// контейнер попап редактирования профиля
const popupEditProfile = document.querySelector('.popup__edit-profile');
// кнопка открытия попапа edit
const btnOpenEdit = document.querySelector('.edit-profile__button');
// экземпляр класса Popup для профиля
const editPopup = new Popup(
  popupEditProfile,
  'edit-profile__button',
  popupEditProfile,
  btnOpenEdit
);

// контейнер попап картинки 
const popupTypeImage = document.querySelector('.popup_type_image');
// "кнопка" открытия попапа картинки - кнопкой является сама картинка
const btnOpenImage = document.querySelector('.place-card__image');
// экземпляр класса Popup для картинки
const imagePopup = new Popup(
  popupTypeImage,
  'place-card__image',
  popupTypeImage,
  btnOpenImage
);

// форма редактирования персональных данных
const popupEditForm = document.forms.edit;
// поля персональной информации
const userInfoName = document.querySelector('.user-info__name');
const userInfoJob = document.querySelector('.user-info__job');

const userInfo = new UserInfo(
  popupEditForm,
  userInfoName,
  userInfoJob
);


/* методы работы с формой персональных данных */
popupEditForm.addEventListener('submit', event => {
  //сброс дефолтного поведения формы
  formAction.preventDefault(event);
  // обновление персональных данных на странице
  userInfo.updateUserInfo();
  // закытие формы при сабмите
  editPopup.close(event);
})


/* методы работы с карточками */

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

// методы работы с персональными данными
