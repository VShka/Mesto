/* Переменные */

const popupEditProfileBtn = profile.querySelector('.edit-profile__button');
const popupEditProfile = document.querySelector('.popup__edit-profile');
const closeEditProfile = document.querySelector('.popup__close_edit-profile');


/* Функции */


// открывает и закрывает форму редактирования профиля
const openAndCloseEditForm = function () {
    popupEditProfile.classList.toggle('popup_is-opened');
  };

/* События */

// открытие и закрытие формы
popupEditProfileBtn.addEventListener('click', openAndCloseEditForm);
closeEditProfile.addEventListener('click', openAndCloseEditForm);