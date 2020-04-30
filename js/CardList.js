class CardList {
  constructor(container, api) {
    this.container = container;
    this.api = api;
  }

  // добавляет карточку
  addCard(instanceCard) {
    this.api.addNewCard(event)
      .then(() => {
        this.container.appendChild(instanceCard);
      })
      .catch(err => console.error('NetworkError:', err.message));
  }

  // отрисовывает карточки при загрузке страницы из массива полученных карточек с сервера
  downloadingUsersCards() {
    this.api
    .getInitialCards()
    .then(arrCards => {
      arrCards.forEach(card => {
        const newCard = new Card(card.name, card.link, imagePopup.open.bind(imagePopup), popupImage, api).create();
        
        this.container.appendChild(newCard);
      })
    })
    .catch(err => console.error('NetworkError:', err.message));
  }
}