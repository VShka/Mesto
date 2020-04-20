class FormValidator {
  constructor(form, errors) {
    this.form = form;
    this.submitBtn = this.form.querySelector('button');
    this.errorMessage = this.form.querySelectorAll('.error-message');
    this.errors = errors;
    this._setEventListeners();


  }

  // валидация полей
  _checkInputValidity(event) {
    const element = event.target;
    const errorElement = event.target.nextElementSibling;

    if (!element.checkValidity()) {
      if (element.validity.valueMissing) {
        errorElement.textContent = this.errors.valueMissing;
        errorElement.classList.add('error-message_active');

        return false;
      }

      if (element.validity.tooShort) {
        errorElement.textContent = this.errors.tooShort;
        errorElement.classList.add('error-message_active');

        return false;
      }
      if (element.validity.typeMismatch) {
        errorElement.textContent = this.errors.typeMismatch;
        errorElement.classList.add('error-message_active');

        return false;
      }
    }

    errorElement.classList.remove('error-message_active');

    return true;
  }

  // активация/дезактивация кнопки
  setSubmitButtonState() {
    if (this.form.checkValidity()) {
      this.submitBtn.classList.remove('popup__button_disabled');
      this.submitBtn.removeAttribute('disabled');
    } else {
      this.submitBtn.classList.add('popup__button_disabled');
      this.submitBtn.setAttribute('disabled', true);
    }
  }

  // добавляет обработчики
  _setEventListeners() {
    this.form.addEventListener('input', (event) => {
      this._checkInputValidity(event);
      this.setSubmitButtonState();
    })
  }

  resetError() {
    this.errorMessage.forEach(item => item.classList.remove('error-message_active'));
  }
}