/* Переменные */

// форма редактирования профиля
const popupEditProfileBtn = profile.querySelector('.edit-profile__button');
const popupEditForm = document.forms.edit;
const [name, about] = popupEditForm.elements;

// данные полей о профиле
const userInfo = profile.querySelector('.user-info');
const userInfoName = userInfo.querySelector('.user-info__name');
const userInfoJob = userInfo.querySelector('.user-info__job');


// кнопка сохранения данных профиля
const btnSaveProfile = document.querySelector('.btn__save-profile');

/* Функции */

// редактирование информации о себе 
const editProfile = function (event) {
    event.preventDefault();
    userInfoName.textContent = `${name.value}`;
    userInfoJob.textContent = `${about.value}`;
    // закрытие формы при сабмите
    //popupEditProfile.classList.remove('popup_is-opened');
};

// подставляет в форму текущие значения полей
const defaultFormValue = function () {
    name.value = userInfoName.textContent;
    about.value = userInfoJob.textContent;

    btnSaveProfile.removeAttribute('disabled');
    btnSaveProfile.classList.remove('popup__button_disabled');
};

// активирует и дезактивирует кнопку 
const disableBtnEditForm = function() {

    if (name.value.length === 0 || about.value.length === 0) {
        btnSaveProfile.setAttribute('disabled', true);
        btnSaveProfile.classList.add('popup__button_disabled');
    } else if (name.value.length < 2 || about.value.length > 30) {
        btnSaveProfile.setAttribute('disabled', true);
        btnSaveProfile.classList.add('popup__button_disabled');
    } else {
        btnSaveProfile.removeAttribute('disabled');
        btnSaveProfile.classList.remove('popup__button_disabled');
    }
};

/* События */


popupEditProfileBtn.addEventListener('click', defaultFormValue);
popupEditForm.addEventListener('submit', editProfile);

// активация и дезактивация кнопки
popupEditForm.addEventListener('input', disableBtnEditForm);