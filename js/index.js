const api = new Api({
  baseUrl: 'https://praktikum.tk/cohort10',
  headers: {
    authorization: 'b0a1ec88-95e1-4628-ac8e-34d4711900a7',
    'Content-Type': 'application/json'
  }
});


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

const popupImage = document.querySelector('.popup__image');
// экземпляр карточки
const card = new Card(imagePopup.open.bind(imagePopup), popupImage);

// контейнер для CardList
const placesList = document.querySelector('.places-list');
// экземпляр контейнера
const cardList = new CardList(placesList, card, api);

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

// форма редактирования персональных данных
const popupEditForm = document.forms.edit;
const [nameInput, jobInput] = popupEditForm.elements;
// поля персональной информации
const userInfoName = document.querySelector('.user-info__name');
const userInfoJob = document.querySelector('.user-info__job');
const userInfoPhoto = document.querySelector('.user-info__photo');
// экземпляр класса для перс данных
const userInfo = new UserInfo({
  userInfoName,
  userInfoJob,
  userInfoPhoto,
  nameInput,
  jobInput,
  api
});
// берем данные о пользоваетеле с сервера при загрузке страницы
userInfo.setUserInfo();

const popupForm = document.forms.new;

const [formName, formLink] = popupForm.elements;
// объект ошибок ru
const errors = {
  valueMissing: 'Это обязательное поле',
  tooShort: 'Должно быть от 2 до 30 символов',
  typeMismatch: 'Здесь должна быть ссылка'
};

// экземпляры класса для валидации форм
const placeFormValidator = new FormValidator(popupForm, errors);
const editFormValidator = new FormValidator(popupEditForm, errors);

// контейнер попап редактирования профиля
const popupEditProfile = document.querySelector('.popup__edit-profile');
// кнопка открытия попапа edit
const btnOpenEdit = document.querySelector('.edit-profile__button');
// экземпляр класса Popup для профиля
const editPopup = new Popup(
  popupEditProfile,
  'edit-profile__button',
  btnOpenEdit,
  userInfo,
  editFormValidator
);

// инициализация форм

const initializationPlaceForm = (event) => {
  formAction.preventDefault(event);
  cardList.addCard(formName.value, formLink.value);
  placePopup.close(event);
  formAction.resetFormFields(popupForm);
  placeFormValidator.setSubmitButtonState();
}
popupForm.addEventListener('submit', event => initializationPlaceForm(event));

const initializationEditForm = (event) => {
  formAction.preventDefault(event);
  userInfo.updateUserInfo();
  editPopup.close(event);
  editFormValidator.setSubmitButtonState();
}
popupEditForm.addEventListener('submit', event => initializationEditForm(event));

// см. Review.md