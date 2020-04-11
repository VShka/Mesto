class UserInfo {
    constructor(editForm, userName, userJob) {
        this.editForm = editForm;
        this.userName = userName;
        this.userJob = userJob;

        this.name = this.editForm.elements.name;
        this.job = this.editForm.elements.job;

        this.defaultFormValue();
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
        this._setUserInfo(this.name.value, this.job.value);
    }
    // подставляет в форму текущие значения полей
    defaultFormValue() {
        this.name.value = this.userName.textContent;
        this.job.value = this.userJob.textContent;
    }
}