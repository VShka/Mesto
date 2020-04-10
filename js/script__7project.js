/* Переменные */

// форма редактирования профиля
const popupEditProfileBtn = profile.querySelector('.edit-profile__button');





// кнопка сохранения данных профиля
const btnSaveProfile = document.querySelector('.btn__save-profile');

/* Функции */

// подставляет в форму текущие значения полей
// const defaultFormValue = function () {
//     name.value = userInfoName.textContent;
//     job.value = userInfoJob.textContent;

//     btnSaveProfile.removeAttribute('disabled');
//     btnSaveProfile.classList.remove('popup__button_disabled');
// };

// активирует и дезактивирует кнопку 
// const disableBtnEditForm = function() {

//     if (name.value.length === 0 || job.value.length === 0) {
//         btnSaveProfile.setAttribute('disabled', true);
//         btnSaveProfile.classList.add('popup__button_disabled');
//     } else if (name.value.length < 2 || job.value.length > 30) {
//         btnSaveProfile.setAttribute('disabled', true);
//         btnSaveProfile.classList.add('popup__button_disabled');
//     } else {
//         btnSaveProfile.removeAttribute('disabled');
//         btnSaveProfile.classList.remove('popup__button_disabled');
//     }
// };

/* События */


// popupEditProfileBtn.addEventListener('click', defaultFormValue);

// активация и дезактивация кнопки
// popupEditForm.addEventListener('input', disableBtnEditForm);