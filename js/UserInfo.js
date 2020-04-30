class UserInfo {
  constructor({userInfoName, userInfoJob, userInfoPhoto, nameInput, jobInput, api, editPopup}) {
    this.userName = userInfoName;
    this.userJob = userInfoJob;
    this.userInfoPhoto = userInfoPhoto;
    this.nameInput = nameInput;
    this.jobInput = jobInput;
    
    this.api = api;
    this.popupMethod = editPopup;
  }

  // получаю перс данные с сервака и устанавливаю
  setUserInfo() {
    this.api.getUserData()
    .then(data => {
      this.userName.textContent = data.name;
      this.userJob.textContent = data.about;
      this.userInfoPhoto.style.backgroundImage = `url(${data.avatar})`;
      // подставляет в форму текущие значения полей
      this.nameInput.value = this.userName.textContent;
      this.jobInput.value = this.userJob.textContent;
    })
    .catch(err => console.error('NetworkError:', err.message));
  }

  // обновляет данные о пользователе, отправляю на сервак и сразу же меняет соответствующие поля 
  updateUserInfo(event) {
    this.api.updateUserData(event)
    .then(data => {
      this.userName.textContent = data.name;
      this.userJob.textContent = data.about;
      // закрывает форму при отправке данных
      this.popupMethod.close(event);
    })
    .catch(err => console.error('NetworkError:', err.message));
  }
}