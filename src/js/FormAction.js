export default class FormAction {

  // сброс поведения формы по умолчанию
  preventDefault(event) {
    event.preventDefault();
  } 
  
  // сброс полей формы
  resetFormFields(form) {
    form.reset();
  }
}