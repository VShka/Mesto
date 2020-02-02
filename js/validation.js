// переменные

// функции 

const checkInputValidity = function (event) {
    const element = event.target;
    const errorElement = event.target.nextElementSibling;
 //     делаем проверку на валидность
    if (!element.checkValidity()) {
        // если поле пустое
        if (element.validity.valueMissing) {
            errorElement.textContent = 'Это обязательное поле';
            errorElement.classList.add('error-message_active');
            return false;
        }
        // если короткое или длинное
        if (element.validity.tooShort) {
            errorElement.textContent = 'Должно быть от 2 до 30 символов';
            errorElement.classList.add('error-message_active');
            return false;
        }
    }
    // иначе сброс ошибки
    errorElement.classList.remove('error-message_active');
    return true;
}

// обработчики

popupEditForm.addEventListener('input', checkInputValidity);
