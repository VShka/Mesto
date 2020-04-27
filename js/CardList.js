class CardList {
  constructor(container, cardMethod, api) {
    this.container = container;
    this._cardMethod = cardMethod;
    this.api = api;
  }

  // добавляет карточку
  addCard(name, link) {
    // используем метод create экземпляра сard
    const template = this._cardMethod.create(name, link);

    this.container.insertAdjacentElement('beforeend', template);
    // this.api.addNewCard(name, link);
  }

  // отрисовывает карточки при загрузке страницы из массива полученных карточек с сервера
  render() {
    this.api
    .getInitialCards()
    .then(arrCards => {
      arrCards.forEach(card => {
        this.addCard(card.name, card.link);
      })
    })
    .catch(err => console.error('NetworkError:', err.message));
  }
}