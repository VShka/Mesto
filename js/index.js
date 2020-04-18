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
const card = new Card(imagePopup, popupImage);

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





// форма редактирования персональных данных
const popupEditForm = document.forms.edit;
const [nameInput, jobInput] = popupEditForm.elements;
// поля персональной информации
const userInfoName = document.querySelector('.user-info__name');
const userInfoJob = document.querySelector('.user-info__job');
// экземпляр класса для перс данных
const userInfo = new UserInfo(
  userInfoName,
  userInfoJob,
  nameInput,
  jobInput
);


const popupForm = document.forms.new;

const [formName, formLink] = popupForm.elements;
 
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

/* методы работы с формой персональных данных */

// Можно лучше
// Код обработчиков вынести в отдельные методы

// я ведь правильно вас понял, создав класс Listeners и сделал там метод для навешивания обработчиков?

// >> Не совсем
// В принципе вынести код который запускает что нужно запустить и ставит слушатели на что нужно ставить --
// нормальная идея, но класс для этого не нужен, это можно в методе сгруппировать
// А имел ввиду я это (например):
// Было:

// this.editForm.addEventListener('submit', event => {
//   this.formAction.preventDefault(event);
//   this.userInfo.updateUserInfo();
//   this.editPopup.close(event);
//   this.editFormValidator.setSubmitButtonState();
// })

// Стало бы:

// function submitEditForm(event) {
//   this.formAction.preventDefault(event);
//   this.userInfo.updateUserInfo();
//   this.editPopup.close(event);
//   this.editFormValidator.setSubmitButtonState();
// }

// this.editForm.addEventListener('submit', (event) => submitEditForm(event));

// инициализация форм

const initializationPlaceForm = function (event) {
  formAction.preventDefault(event);
  cardList.addCard(formName.value, formLink.value);
  placePopup.close(event);
  formAction.resetFormFields(popupForm);
  placeFormValidator.setSubmitButtonState();
}
popupForm.addEventListener('submit', event => initializationPlaceForm(event));

const initializationEditForm = function (event) {
  formAction.preventDefault(event);
  userInfo.updateUserInfo();
  editPopup.close(event);
  editFormValidator.setSubmitButtonState();
}
popupEditForm.addEventListener('submit', event => initializationEditForm(event));


// В принципе все хорошо, просмотрите везде комментарии, исправьте то малое из критических замечаний,
// что осталось и я приму с удовольствием. Прошу прощения за задержку.