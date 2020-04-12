// экземпляр карточки
const card = new Card();

// контейнер для CardList
const placesList = document.querySelector('.places-list');
// экземпляр контейнера
const cardList = new CardList(placesList, card, initialCards);

// передаем методу массив карточек и отрисовываем при загрузке в нашем контейнере
cardList.render();

// экземпляр класса действия с формой
const formAction = new FormAction();

// контейнер попап добавления карточки
const popupTypePlace = document.querySelector('.popup_type_place');
// кнопка открытия попапа place
const btnOpenPlace = document.querySelector('.user-info__button');
// экземпляр класса Popup для формы добавления карточки
const placePopup = new Popup(
  popupTypePlace,
  'user-info__button',
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
  btnOpenImage
);

// форма редактирования персональных данных
const popupEditForm = document.forms.edit;
// поля персональной информации
const userInfoName = document.querySelector('.user-info__name');
const userInfoJob = document.querySelector('.user-info__job');
// экземпляр класса для перс данных
const userInfo = new UserInfo(
  popupEditForm,
  userInfoName,
  userInfoJob
);


const popupForm = document.forms.new;
// экземпляры класса для валидации форм
const placeFormValidator = new FormValidator(popupForm);
const editFormValidator = new FormValidator(popupEditForm);

/* методы работы с формой персональных данных */

// Можно лучше
// Код обработчиков вынести в отдельные методы

// редактируем персональные данные
popupEditForm.addEventListener('submit', event => {
  //сброс дефолтного поведения формы
  formAction.preventDefault(event);
  // обновление персональных данных на странице
  userInfo.updateUserInfo();
  // закытие формы при сабмите
  editPopup.close(event);
  // сброс полей формы после сабмита
  formAction.resetFormFields(popupEditForm);
  // проверка кнопки на валидность
  editFormValidator.setSubmitButtonState();
})


/* методы работы с карточками */

// добавляем 1 карточку
popupForm.addEventListener('submit', (event) => {
  //сброс дефолтного поведения формы
  formAction.preventDefault(event);
  //добавление карточки
  cardList.addCardForm();
  //закрытие попапа после сабмита
  placePopup.close(event);
  //сброс полей формы после сабмита
  formAction.resetFormFields(popupForm);
  // проверка кнопки на валидность
  placeFormValidator.setSubmitButtonState();
});

// Здравствйте!
// Хорошо с разбиением справились, но есть еще недочеты
// 1. См.комментарии в коде
// 2. При открытии попап с данными юзера не подставляется актуальная информация
// 3. Если открыть попап с данными юзера, вызвать ошибку на инпуте, закрыть по крестику, открыть снова
// ошибка будет гореть, а в инпутах будет невалидная информация

// Исправьте критические замечания и присылайте на проверку.