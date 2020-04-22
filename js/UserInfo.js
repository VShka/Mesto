class UserInfo {
  constructor({userInfoName, userInfoJob, nameInput, jobInput, api}) {
    this.userName = userInfoName;
    this.userJob = userInfoJob;
    this.nameInput = nameInput;
    this.jobInput = jobInput;
    this.api = api;
  }

  // получаю перс данные с сервака и устанавливаю
  setUserInfo() {
    this.api.getUserData()
    .then(data => {
      this.userName.textContent = data.name;
      this.userJob.textContent = data.about;
    })
    .catch(err => console.log(err));
  }

  // обновляет данные о пользователе, отправляю на сервак и сразу же меняет соответствующие поля 
  updateUserInfo() {
    this.api.updateUserData(this.nameInput.value, this.jobInput.value)
    .then(data => {
      this.userName.textContent = data.name;
      this.userJob.textContent = data.about;
    })
    .catch(err => console.log(err));
  }

  // подставляет в форму текущие значения полей
  defaultFormValue() {
    this.nameInput.value = this.userName.textContent;
    this.jobInput.value = this.userJob.textContent;
  }
}