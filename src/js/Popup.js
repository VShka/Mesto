export default class Popup {
  constructor(container, openFormButton, btnOpen, validatorMethod) {
    this.container = container;
    this.openFormButton = openFormButton;
    this.btnOpen = btnOpen;
    this.btnClose = this.container.querySelectorAll('.popup__close');

    // метод для editPopup
    this.validatorMethod = validatorMethod;

    this._setEventListeners();
  }

  open(event) {
    if (event.target.classList.contains(this.openFormButton)) {
      this.container.classList.add('popup_is-opened');
      // проверяет на валидность кнопку и сбрасывает ошибки, при открытии окна, если закрыли с невалидным инпутом
      if (this.validatorMethod) {
        this.validatorMethod.resetError();
        this.validatorMethod.setSubmitButtonState();
      }
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
    if (this.btnOpen) {
      this.btnOpen.addEventListener('click', event => {
        this.open(event);
      });
    }
    if (this.btnClose) {
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