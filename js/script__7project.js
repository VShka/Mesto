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

// данные всплывающей картинки
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const placeCardName = document.querySelector('.place-card');
const closeImage = document.querySelector('.close__image');
const placeCardImage = document.querySelector('.place-card__image');

/* Функции */


// открывает и закрывает форму редактирования профиля
const openAndCloseEditForm = function () {
    popupEditProfile.classList.toggle('popup_is-opened');
    
};
const closeEditFormEsc = function (event) {
    if(event.key === 'Escape') {
        popupEditProfile.classList.remove('popup_is-opened');
    }
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

// открывает и закрывает всплывающую картинку

const openPopupImage = function (event) {
    if (event.target.closest('.place-card')) {
        if(event.target.classList.contains('place-card__image')) {
            popupTypeImage.classList.add('popup_is-opened');

            // < не могу понять > Почему некоторые картинки при открытии больше, чем другие. ИКОНКА ЗАКРЫТИЯ ПРОПАДАЕТ. Видимо проблема с размерами. Возможно необходимо привести их к общему размеру
            popupImage.setAttribute('src', `${event.target.style.backgroundImage.slice(5, -2)}`);
        }
    }
};

const closePopupImage = function () {
    if(event.key === 'Escape') {
        popupTypeImage.classList.remove('popup_is-opened');
    } else {
        popupTypeImage.classList.remove('popup_is-opened');
    }
};

/* Валидация */




/* События */


// открытие и закрытие формы
popupEditProfileBtn.addEventListener('click', openAndCloseEditForm);
popupEditProfileBtn.addEventListener('click', defaultFormValue);
closeEditProfile.addEventListener('click', openAndCloseEditForm);
popupEditForm.addEventListener('submit', editProfile);
placesList.addEventListener('click', openPopupImage);
closeImage.addEventListener('click', closePopupImage);
document.addEventListener('keydown', closeEditFormEsc);
document.addEventListener('keydown', closePopupImage);