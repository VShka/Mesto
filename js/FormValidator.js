class FormValidator {
    constructor(form) {
        this.form = form;
        this.submitBtn = this.form.querySelector('button');

        this.setEventListeners();
    }
    // валидация полей
    checkInputValidity() {
        const element = event.target;
        const errorElement = event.target.nextElementSibling;

        if (!element.checkValidity()) {
            if (element.validity.valueMissing) {
                errorElement.textContent = 'Это обязательное поле';
                errorElement.classList.add('error-message_active');

                return false;
            }

            if (element.validity.tooShort) {
                errorElement.textContent = 'Должно быть от 2 до 30 символов';
                errorElement.classList.add('error-message_active');

                return false;
            }
            if (element.validity.typeMismatch) {
                errorElement.textContent = 'Здесь должна быть ссылка';
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
    setEventListeners() {
        this.form.addEventListener('input', () => {
            this.checkInputValidity();
            this.setSubmitButtonState();
        })
    }
}