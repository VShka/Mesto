class CardList {
    constructor(container, cardTemplate) {
      this.container = container;
      this.cardTemplate = cardTemplate;
    }
     // добавляет карточку в список
    addCard(name, link) {
      const template = this.cardTemplate.create(name, link);

      this.container.insertAdjacentHTML('beforeend', template);
    }
     // отрисовывает карточки при загрузке страницы
    render(arrCards) {
      arrCards.forEach(card => {
        this.addCard(card.name, card.link);
      })
    }
    
}
// экземпляр контейнера 
const cardList = new CardList(placesList, card);

// передаем методу массив карточек и отрисовываем при загрузке в нашем контейнере
cardList.render(initialCards);


popupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = formName.value;
  const link = formLink.value;

  cardList.addCard(name, link);

  popup.classList.remove('popup_is-opened');
  popupForm.reset();

  btnAddPlace.setAttribute('disabled', true);
  btnAddPlace.classList.add('popup__button_disabled');
});

// лайк и удаление карточки
cardList.container.addEventListener('click', event => {
  card.like(event);
  card.remove(event);
});