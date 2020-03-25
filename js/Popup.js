class Popup {
    constructor(container) {
        this.container = container;
    }

    open(event) {
        if(event.target.classList.contains('user-info__button')) {
            this.container.classList.add('popup_is-opened');
        }
    }

    close(event) {
        if(event.target.classList.contains('popup__close')) {
            this.container.classList.remove('popup_is-opened');
        }
    }

    closeFormEsc(event) {
        if(event.key === 'Escape') {
            this.container.classList.remove('popup_is-opened');
        }
    }
}

// экземпляр формы добавления нового места
const place = new Popup(document.querySelector('.popup_type_place'));

// открытие окна добавления места
document.querySelector('.user-info__button')
.addEventListener('click', event => {
    place.open(event);
})

// закрытие окна добавления места
document.querySelector('.popup__close')
.addEventListener('click', event => {
    place.close(event);
})

// закрытие формы клавишей Escape
document.addEventListener('keydown', event => {
    place.closeFormEsc(event);
})