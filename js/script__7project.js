
/* Здравствуйте! Если можно получить фидбек по поводу работы, в правильном ли направлении я двигаюсь, то было бы очень здорово :) */
/* реализовано 1-ое, 2-ое задание и 3 не полностью, не получается делегировать на все картинки */

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
const closeImage = popupTypeImage.querySelector('.close__image');
const placeCardImage = document.querySelector('.place-card__image');

const formLink = popupForm.elements.link;

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

// открывает и закрывает всплывающую картинку
const openAndClosePopupImage = function (event) {
    if(event.target.classList.contains('place-card__image')) {
        popupTypeImage.classList.toggle('popup_is-opened');
        popupImage.setAttribute(`src`, `${event.target.style.backgroundImage.slice(5, -2)}`);
    }
};


/* События */


// открытие и закрытие формы
popupEditProfileBtn.addEventListener('click', openAndCloseEditForm);
popupEditProfileBtn.addEventListener('click', defaultFormValue);
closeEditProfile.addEventListener('click', openAndCloseEditForm);
popupEditForm.addEventListener('submit', editProfile);
placeCardName.addEventListener('click', openAndClosePopupImage);
closeImage.addEventListener('click', openAndClosePopupImage);


