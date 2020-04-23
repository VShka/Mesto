class CardList {
  constructor(container, cardTemplate, api) {
    this.container = container;
    this._cardTemplate = cardTemplate;
    this.api = api;
  }

  // добавляет карточку
  addCard(name, link) {
    // используем метод create экземпляра сard
    const template = this._cardTemplate.create(name, link);

    this.container.insertAdjacentElement('beforeend', template);
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