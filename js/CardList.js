class CardList {
  constructor(container, imagePopup, imageIncreased, api, ownerId) {
    this.container = container;
    this.api = api;
    this.ownerId = ownerId;

    this.imagePopup = imagePopup;
    this.imageIncreased = imageIncreased;
  }

  // добавляет карточку в DOM
  addCard(instanceCard) {
    this.container.appendChild(instanceCard);
  }

  // отрисовывает карточки при загрузке страницы из массива полученных карточек с сервера
  downloadingUsersCards() {
    this.api
    .getInitialCards()
    .then(arrCards => {
      arrCards.forEach(card => {
        const userCards = new Card(
          card.name,
          card.link,
          card.likes,
          card._id,
          card.owner._id,
          this.imagePopup.open.bind(this.imagePopup),
          this.imageIncreased,
          this.ownerId(),
          this.api);
          this.addCard(userCards.create());
      })
    })
    .catch(err => console.error('NetworkError:', err));
  }

  addOwnerCard() {
    this.api
    .addNewCard(event)
    .then((card) => {
      const ownerCard = new Card(
      card.name,
      card.link,
      card.likes,
      card._id,
      card.owner._id,
      this.imagePopup.open.bind(this.imagePopup),
      this.imageIncreased,
      this.ownerId(),
      this.api);
      this.addCard(ownerCard.create());
    })
    .catch(err => console.error(err));
  }
}