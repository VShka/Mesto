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

    // открытие попапа place/edit/image
    this._setEventListeners(this.btnOpen);
    // закрытие попап place/edit/image
    this._setEventListeners(this.btnClose);
    // закрытие попап place/edit/image клавишей Escape
    this._setEventListeners();
  }

  open(event) {
    if (event.target.classList.contains(this.openFormButton)) {
      this.container.classList.add('popup_is-opened');
    }
    if (this.openFormButton == 'place-card__image') {
      // картинка
      const popupImage = this.container.querySelector('.popup__image');
      // задаем картинки нужные параметры для отображения
      popupImage.setAttribute('src', `${event.target.style.backgroundImage.slice(5, -2)}`);
      popupImage.style.maxWidth = '80vw';
      popupImage.style.maxHeight = '80vh';
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

  _setEventListeners(btn) {
    if (btn == this.btnOpen) {
      this.btnOpen.addEventListener('click', event => {
        this.open(event);
      });
    }
    if (btn == this.btnClose) {
      this.btnClose.forEach(item => {
        item.addEventListener('click', event => {
          this.close(event);
        })
      });
    }
    if (btn == undefined) {
      document.addEventListener('keydown', (event) => {
        this._closeFormEsc(event);
      });
    }
  }
}