class Popup {
  constructor(container, openFormButton, btnOpen) {
    this.container = container;
    this.openFormButton = openFormButton;
    this.btnOpen = btnOpen;
    this.btnClose = this.container.querySelectorAll('.popup__close');


    // Можно лучше
    // Зачем 3 раза вызывать метод, когда можно сделать 1 вызов передав туда
    // и кнопку открытия и кнопку закрытия и по Esc аучить закрываться?
    // Передайте туда два параметра и прикрутите все слушатели за раз, не вижу препятствий))
    // Надо исправить
    this._setEventListeners();
  }

  open(event) {
    if (event.target.classList.contains(this.openFormButton)) {
      this.container.classList.add('popup_is-opened');
    }
  }

  close(event) {
    if (event.target.classList.contains('popup__close') || (this.container == this.container)) { // последнее условие для закрытия попапа при сабмите
      this.container.classList.remove('popup_is-opened');
    }
  }

  _closeFormEsc(event) {
    if (event.key === 'Escape') {
      this.container.classList.remove('popup_is-opened');
    }
  }

  _setEventListeners() {
    if(this.btnOpen != null) {
      this.btnOpen.addEventListener('click', event => {
        this.open(event);
      });
    }
    if (this.btnClose != null) {
      this.btnClose.forEach(item => {
        item.addEventListener('click', event => {
          this.close(event);
        })
      });
    }
    document.addEventListener('keydown', (event) => {
      this._closeFormEsc(event);
    });
  }
}