// экземпляр карточки
const card = new Card();

// контейнер для CardList
const placesList = document.querySelector('.places-list');
// экземпляр контейнера 
const cardList = new CardList(placesList, card);

// форма добавления нового места

// экземпляр действия с формой
const formAction = new FormAction(popupForm);

// контейнер попап добавления карточки
const popupTypePlace = document.querySelector('.popup_type_place');
// экземпляр класса PopupPlace
const placePopup = new Popup(popupTypePlace);

// контейнер попап редактирования профиля
const popupEditProfile = document.querySelector('.popup__edit-profile');
// экземпляр класса PopupEdit
const editPopup = new Popup(popupEditProfile);


/* методы работы с карточками */


// передаем методу массив карточек и отрисовываем при загрузке в нашем контейнере
cardList.render(initialCards);

// добавляем 1 карточку
popupForm.addEventListener('submit', () => {
    //добавление карточки
  cardList.addCardForm();
    //сброс дефолтного поведения формы
  formAction.preventDefault(event);
    //сброс полей формы после сабмита
  formAction.resetFormFields();
    //закрытие попапа после сабмита
  placePopup.close(event, popupTypePlace);
});

// лайк и удаление карточки
cardList.container.addEventListener('click', () => {
  card.like(event);
  card.remove(event);
});


/* методы работы с попап */


// открытие попапа place
document.querySelector('.user-info__button')
.addEventListener('click', () => {
  placePopup.open(event, 'user-info__button');
})

// открытие попапа edit
document.querySelector('.edit-profile__button')
.addEventListener('click', () => {
  editPopup.open(event, 'edit-profile__button');
})

// закрытие попап place/edit
document.querySelectorAll('.popup__close')
.forEach(item => {
    item.addEventListener('click', event => {
      placePopup.close(event);
      editPopup.close(event);
    })
})

// закрытие попап place/edit клавишей Escape
document.addEventListener('keydown', () => {
  placePopup.closeFormEsc(event);
  editPopup.closeFormEsc(event);
})