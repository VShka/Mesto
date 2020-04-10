class UserInfo {
    constructor(editForm, userName, userJob) {
        this.editForm = editForm;
        this.userName = userName;
        this.userJob = userJob;
    }
    // обновляет данные о пользователе
    _setUserInfo(newNameInfo, newJobInfo) {
        // меняем текст полученных полей персональной информации на новые из формы edit
        this.userName.textContent = `${newNameInfo}`;
        this.userJob.textContent = `${newJobInfo}`;
    }
    // отображает данные на странице
    updateUserInfo() {
        // поля формы edit
        const [name, job] = this.editForm.elements;
        // используем приватный метод и подставляем значение полей формы edit
        this._setUserInfo(name.value, job.value);
    }
}