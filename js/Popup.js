class Popup {
  constructor(container, openFormButton, btnOpen, userInfoMethod, validatorMethod) {
    this.container = container;
    this.openFormButton = openFormButton;
    this.btnOpen = btnOpen;
    this.btnClose = this.container.querySelectorAll('.popup__close');

    // методы для editPopup
    this.userInfoMethod = userInfoMethod;
    this.validatorMethod = validatorMethod;


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
      // подставляет текущую информацию в форму профиля
      if (this.userInfoMethod) {
        this.userInfoMethod.defaultFormValue();
      }
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
    if(this.btnOpen) {
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