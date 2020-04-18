class UserInfo {
  constructor(userName, userJob, nameInput, jobInput) {

    this.userName = userName;
    this.userJob = userJob;
    this.nameInput = nameInput;
    this.jobInput = jobInput;
  }

  // обновляет данные о пользователе
  _setUserInfo(newNameInfo, newJobInfo) {
    // меняем текст полученных полей персональной информации на новые из формы edit
    this.userName.textContent = `${newNameInfo}`;
    this.userJob.textContent = `${newJobInfo}`;
  }

  // отображает данные на странице
  updateUserInfo() {
    // используем приватный метод и подставляем значение полей формы edit
    this._setUserInfo(this.nameInput.value, this.jobInput.value);
  }

  // подставляет в форму текущие значения полей
  defaultFormValue() {
    this.nameInput.value = this.userName.textContent;
    this.jobInput.value = this.userJob.textContent;
  }
}