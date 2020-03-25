class CardList {
    constructor(container, cardTemplate) {
      this.container = container;
      this.cardTemplate = cardTemplate;
    }

     // добавляет карточку
    addCard(name, link) {
      // используем метод create экземпляра сard 
      const template = this.cardTemplate.create(name, link);

      this.container.insertAdjacentHTML('beforeend', template);
    }

     // отрисовывает карточки при загрузке страницы
    render(arrCards) {
      arrCards.forEach(card => {
        this.addCard(card.name, card.link);
      })
    }

    // добавление 1 карточки из формы
    addCardForm(event) {
      // сбрасываем поведение по умолчанию у нашей формы
      event.preventDefault();

      // окно добавления карточки
      const popupTypePlace = document.querySelector('.popup_type_place');

      // получаем значение полей формы
      const name = formName.value;
      const link = formLink.value;

      // используем метод экземпляра cardList
      cardList.addCard(name, link);

      // сбрасываем форму и закрываем
      popupTypePlace.classList.remove('popup_is-opened');
      popupForm.reset();

      // валидация кнопки
      btnAddPlace.setAttribute('disabled', true);
      btnAddPlace.classList.add('popup__button_disabled');
    }
}
// экземпляр контейнера 
const cardList = new CardList(placesList, card);

// передаем методу массив карточек и отрисовываем при загрузке в нашем контейнере
cardList.render(initialCards);

// добавляем 1 карточку
popupForm.addEventListener('submit', () => {
  cardList.addCardForm(event);
});

// лайк и удаление карточки
cardList.container.addEventListener('click', event => {
  card.like(event);
  card.remove(event);
});