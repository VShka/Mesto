class CardList {
  constructor(container, cardTemplate, arrCards) {
    this.container = container;
    this._cardTemplate = cardTemplate;
    this.arrCards = arrCards;
  }

  // добавляет карточку
  addCard(name, link) {
    // используем метод create экземпляра сard
    const template = this._cardTemplate.create(name, link);

    this.container.insertAdjacentElement('beforeend', template);
  }

  // отрисовывает карточки из массива при загрузке страницы
  render() {
    this.arrCards.forEach(item => {
      this.addCard(item.name, item.link);
    })
  }
}