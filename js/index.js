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
const placeFormValidator = new FormValidator(popupForm);
const editFormValidator = new FormValidator(popupEditForm);

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

const listeners = new Listeners(
  popupForm,
  popupEditForm,
  formAction,
  cardList,
  placePopup,
  editPopup,
  userInfo,
  placeFormValidator,
  editFormValidator
);

// Здравствйте!
// Хорошо с разбиением справились, но есть еще недочеты
// 1. См.комментарии в коде
// 2. При открытии попап с данными юзера не подставляется актуальная информация
// 3. Если открыть попап с данными юзера, вызвать ошибку на инпуте, закрыть по крестику, открыть снова
// ошибка будет гореть, а в инпутах будет невалидная информация

// Исправьте критические замечания и присылайте на проверку.