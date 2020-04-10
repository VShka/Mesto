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

    // добавление 1 карточки из формы
    addCardForm() {
      // получаем значение полей формы
      const name = formName.value;
      const link = formLink.value;
      
      this._addCard(name, link);
      // валидация кнопки
      btnAddPlace.setAttribute('disabled', true);
      btnAddPlace.classList.add('popup__button_disabled');
    }
}