class CardList {
  constructor(container, cardTemplate, arrCards) {
    this.container = container;
    this._cardTemplate = cardTemplate;
    this.arrCards = arrCards;
  }

  // добавляет карточку
  _addCard(name, link) {
    // используем метод create экземпляра сard
    const template = this._cardTemplate.create(name, link);

    this.container.insertAdjacentElement('beforeend', template);
  }

  // отрисовывает карточки из массива при загрузке страницы
  render() {
    this.arrCards.forEach(item => {
      this._addCard(item.name, item.link);
    })
  }
  // Надо исправить
  // Обработка форм не входит в обязанности этого класса
  // этого кода тут быть не должно
  // добавление 1 карточки из формы
  addCardForm() {
    const popupForm = document.forms.new;
    const [formName, formLink] = popupForm.elements;
    // получаем значение полей формы
    const name = formName.value;
    const link = formLink.value;

    this._addCard(name, link);
  }
}