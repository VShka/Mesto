class CardList {
  constructor(container, api) {
    this.container = container;
    this.api = api;
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
          card.likes.length,
          card._id,
          card.owner._id,
          imagePopup.open.bind(imagePopup),
          popupImage,
          api);
        this.addCard(userCards.create());
      })
    })
    .catch(err => console.error('NetworkError:', err.message));
  }

  addOwnerCard() {
    // const {
    //   name: {value: formName},
    //   link: {value: formLink},
    // } = popupForm.elements;
    this.api
    .addNewCard(event)
    .then((card) => {
      const ownerCard = new Card(
      card.name,
      card.link,
      card.likes.length,
      card._id,
      card.owner._id,
      imagePopup.open.bind(imagePopup),
      popupImage,
      api);

      this.addCard(ownerCard.create());
    })
    .catch(err => console.error(err));
  }
}