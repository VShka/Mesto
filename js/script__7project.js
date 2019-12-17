/* Переменные */

// форма редактирования профиля
const popupEditProfileBtn = profile.querySelector('.edit-profile__button');
const popupEditProfile = document.querySelector('.popup__edit-profile');
const closeEditProfile = document.querySelector('.popup__close_edit-profile');
const popupEditForm = document.forms.edit;
const [name, about] = popupEditForm.elements;

// данные полей о профиле
const userInfo = profile.querySelector('.user-info');
const userInfoName = userInfo.querySelector('.user-info__name');
const userInfoJob = userInfo.querySelector('.user-info__job');

/* Функции */


// открывает и закрывает форму редактирования профиля
const openAndCloseEditForm = function () {
    popupEditProfile.classList.toggle('popup_is-opened');
};

// редактирование информации о себе 
const editProfile = function (event) {
    event.preventDefault();
    userInfoName.textContent = `${name.value}`;
    userInfoJob.textContent = `${about.value}`;
    popupEditProfile.classList.remove('popup_is-opened');
};

// подставляет в форму текущие значения полей
const defaultFormValue = function () {
    name.value = userInfoName.textContent;
    about.value = userInfoJob.textContent;
};


/* События */


// открытие и закрытие формы
popupEditProfileBtn.addEventListener('click', openAndCloseEditForm);
popupEditProfileBtn.addEventListener('click', defaultFormValue);
closeEditProfile.addEventListener('click', openAndCloseEditForm);
popupEditForm.addEventListener('submit', editProfile);
