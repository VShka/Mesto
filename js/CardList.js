class CardList {
    constructor(container, cardTemplate) {
      this.container = container;
      this._cardTemplate = cardTemplate;
    }

     // добавляет карточку
    _addCard(name, link) {
      // используем метод create экземпляра сard 
      const template = this._cardTemplate.create(name, link);

      this.container.insertAdjacentHTML('beforeend', template);
    }

     // отрисовывает карточки из массива при загрузке страницы
    render(arrCards) {
      arrCards.forEach(item => {
        this._addCard(item.name, item.link);
      })
    }

    // добавление 1 карточки из формы
    addCardForm() {
      // получаем значение полей формы
      const name = formName.value;
      const link = formLink.value;

      cardList._addCard(name, link);

      // валидация кнопки
      btnAddPlace.setAttribute('disabled', true);
      btnAddPlace.classList.add('popup__button_disabled');
    }
}