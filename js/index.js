// контейнер попап картинки
const popupTypeImage = document.querySelector('.popup_type_image');
// "кнопка" открытия попапа картинки - кнопкой является сама картинка
const btnOpenImage = document.querySelector('.place-card__image');
const popupImage = document.querySelector('.popup__image');

// контейнер попап добавления карточки
const popupTypePlace = document.querySelector('.popup_type_place');
// кнопка открытия попапа place
const btnOpenPlace = document.querySelector('.user-info__button');

// контейнер для CardList
const placesList = document.querySelector('.places-list');

// контейнер попап редактирования профиля
const popupEditProfile = document.querySelector('.popup__edit-profile');
// кнопка открытия попапа edit
const btnOpenEdit = document.querySelector('.edit-profile__button');

// форма редактирования персональных данных
const popupEditForm = document.forms.edit;
const [nameInput, jobInput] = popupEditForm.elements;
// форма нового места
const popupForm = document.forms.new;

// поля персональной информации
const userInfoName = document.querySelector('.user-info__name');
const userInfoJob = document.querySelector('.user-info__job');
const userInfoPhoto = document.querySelector('.user-info__photo');

// объект ошибок ru
const errors = {
  valueMissing: 'Это обязательное поле',
  tooShort: 'Должно быть от 2 до 30 символов',
  typeMismatch: 'Здесь должна быть ссылка'
};


const api = new Api({
  baseUrl: 'https://praktikum.tk/cohort10',
  headers: {
    authorization: 'b0a1ec88-95e1-4628-ac8e-34d4711900a7',
    'Content-Type': 'application/json'
  }
});


// экземпляр класса Popup для картинки
const imagePopup = new Popup(
  popupTypeImage,
  'place-card__image',
  btnOpenImage
);

// экземпляр контейнера
const cardList = new CardList(placesList, api);

// экземпляр класса действия с формой
const formAction = new FormAction();

// экземпляр класса Popup для формы добавления карточки
const placePopup = new Popup(
  popupTypePlace,
  'user-info__button',
  btnOpenPlace
);

// экземпляры класса для валидации форм
const placeFormValidator = new FormValidator(popupForm, errors);
const editFormValidator = new FormValidator(popupEditForm, errors);

// экземпляр класса Popup для профиля
const editPopup = new Popup(
  popupEditProfile,
  'edit-profile__button',
  btnOpenEdit,
  editFormValidator
);

// экземпляр класса для перс данных
const userInfo = new UserInfo({
  userInfoName,
  userInfoJob,
  userInfoPhoto,
  nameInput,
  jobInput,
  api,
  editPopup
});


// берем данные о пользоваетеле с сервера при загрузке страницы
userInfo.setUserInfo();
// передаем методу массив карточек и отрисовываем при загрузке в нашем контейнере
// cardList.downloadingUsersCards();

// добавление карточки владельца странички
const initializationPlaceForm = (event) => {
  formAction.preventDefault(event);
  cardList.addOwnerCard();
  placePopup.close(event);
  formAction.resetFormFields(popupForm);
  placeFormValidator.setSubmitButtonState();
}

// обновление персональных данных владельца
const initializationEditForm = (event) => {
  formAction.preventDefault(event);
  userInfo.updateUserInfo(event);
  editFormValidator.setSubmitButtonState();
}


// слушатели на формы
popupForm.addEventListener('submit', event => initializationPlaceForm(event));
popupEditForm.addEventListener('submit', event => initializationEditForm(event));