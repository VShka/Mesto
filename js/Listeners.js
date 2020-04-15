class Listeners {
  constructor(
    newPlaceForm, editForm, formAction, cardList, placePopup, 
    editPopup, userInfo, placeFormValidator, editFormValidator) {
        // формы
    this.newPlaceForm = newPlaceForm;
    this.editForm = editForm;
        // внешние методы классов
    this.formAction = formAction;
    this.cardList = cardList;
    this.placePopup = placePopup;
    this.editPopup = editPopup;
    this.userInfo = userInfo;
    this.placeFormValidator = placeFormValidator;
    this.editFormValidator = editFormValidator;

    this.setEventListeners();
    
  }

  setEventListeners() {
    this.newPlaceForm.addEventListener('submit', event => {
        this.formAction.preventDefault(event);
        this.cardList._addCard(formName.value, formLink.value);
        this.placePopup.close(event);
        this.formAction.resetFormFields(this.newPlaceForm);
        this.placeFormValidator.setSubmitButtonState();
    })

    this.editForm.addEventListener('submit', event => {
        this.formAction.preventDefault(event);
        this.userInfo.updateUserInfo();
        this.editPopup.close(event);
        this.editFormValidator.setSubmitButtonState();
    })
  }
}