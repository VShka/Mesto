// экземпляр карточки
const card = new Card();

// контейнер для CardList
const placesList = document.querySelector('.places-list');
// экземпляр контейнера 
const cardList = new CardList(placesList, card);

// экземпляр действия с формой
const formAction = new FormAction(popupForm);

// контейнер попап добавления карточки
const popupTypePlace = document.querySelector('.popup_type_place');
// экземпляр класса Popup
const placePopup = new Popup(
  popupTypePlace,
  'user-info__button',
  popupTypePlace
);

// контейнер попап редактирования профиля
const popupEditProfile = document.querySelector('.popup__edit-profile');
// экземпляр класса Popup
const editPopup = new Popup(
  popupEditProfile,
  'edit-profile__button',
  popupEditProfile
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

// лайк и удаление карточки
cardList.container.addEventListener('click', (event) => {
  card.like(event);
  card.remove(event);
});


/* методы работы с попап */


// открытие попапа place
document.querySelector('.user-info__button')
.addEventListener('click', (event) => {
  placePopup.open(event);
})

// открытие попапа edit
document.querySelector('.edit-profile__button')
.addEventListener('click', (event) => {
  editPopup.open(event);
})

// закрытие попап place/edit
document.querySelectorAll('.popup__close')
.forEach(item => {
    item.addEventListener('click', (event) => {
      placePopup.close(event);
      editPopup.close(event);
    })
})

// закрытие попап place/edit клавишей Escape
document.addEventListener('keydown', (event) => {
  placePopup.closeFormEsc(event);
  editPopup.closeFormEsc(event);
})