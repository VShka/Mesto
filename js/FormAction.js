class FormAction {
    constructor(form) {
        this._form = form;
    }

    // сброс поведения формы по умолчанию
    preventDefault(event) {
        event.preventDefault();
    } 
  
    // сброс полей формы
    resetFormFields() {
    this._form.reset();
    }
}