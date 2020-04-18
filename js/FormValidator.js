class FormValidator {
  constructor(form, errors) {
    this.form = form;
    this.submitBtn = this.form.querySelector('button');
    this.errorMessage = this.form.querySelectorAll('.error-message');
    this.errors = errors; 
    this._setEventListeners();

    
  }

  // валидация полей
  _checkInputValidity() {
    const element = event.target;
    const errorElement = event.target.nextElementSibling;

    if (!element.checkValidity()) {
      if (element.validity.valueMissing) {
        // Можно лучше
        // Текст ошибок лучше представить в виде объекта вида:
        // const errorMessages = {
        // valueMissing: 'Это обязательное поле',
        // tooShort: 'Должно быть от 2 до 30 символов',
        // typeMismatch: 'Здесь должна быть ссылка'
        // };
        // Объект передаем в метод валидации и текст берем уже по ключу объекта
        // Что это дает? Так мы отвязываемся от локали, можно объект на любом
        // языке скинуть, таким образом можно легко осуществить локализацию.

        /* 
          я немножко по другому сделал, надеюсь так можно в качестве best practise,
          большое спасибо за наводку, так конечно легче потом будет:)

          на самом деле я запутался, где создавать объект с ошибками, потому как
          передать в метод могу только здесь, так как он приватный и юзается только внутри класса
          и где мне тогда передавать ему объект, разве что юзать объект вне класса
          в общем я тут немного не понял, зато допер до другого решения и это круто)
        */
        errorElement.textContent = this.errors.ru.valueMissing;
        errorElement.classList.add('error-message_active');

        return false;
      }

      if (element.validity.tooShort) {
        errorElement.textContent = this.errors.ru.tooShort;
        errorElement.classList.add('error-message_active');

        return false;
      }
      if (element.validity.typeMismatch) {
        errorElement.textContent = this.errors.ru.typeMismatch;
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
    this.form.addEventListener('input', () => {
      this._checkInputValidity();
      this.setSubmitButtonState();
    })
  }

  resetError() {
    this.errorMessage.forEach(item => item.classList.remove('error-message_active'));
  }
}