// экземпляр класса PopupPlace
const place = new PopupPlace(document.querySelector('.popup_type_place'));

// экземпляр класса PopupEdit
const edit = new PopupEdit(document.querySelector('.popup__edit-profile'));




// открытие попапа place
document.querySelector('.user-info__button')
.addEventListener('click', event => {
    place.open(event);
})

// открытие попапа edit
document.querySelector('.edit-profile__button')
.addEventListener('click', event => {
    edit.open(event);
})

// закрытие попап place/edit
document.querySelectorAll('.popup__close')
.forEach(item => {
    item.addEventListener('click', event => {
        place.close(event);
        edit.close(event);
    })
})

// закрытие попап place/edit клавишей Escape
document.addEventListener('keydown', event => {
    place.closeFormEsc(event);
    edit.closeFormEsc(event);
})