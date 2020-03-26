class Popup {
    constructor(container) {
        this.container = container;
    }

    open(event) {
        if(event.target.classList.contains('popup__btn')) {
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
const edit = new Popup(document.querySelector('.popup__edit-profile'));

// открытие форм place и edit
document.querySelectorAll('.popup__btn')
 // получаем массив с искомым классом
.forEach(item => {  
    // перебираем массив и проверяем на условие
    if(item.classList.contains('user-info__button')) {
        item.addEventListener('click', event => { 
            // вешаем обработчик и привязываем метод
            place.open(event);
        })
    } else {
        item.addEventListener('click', event => {  
            // вешаем обработчик и привязываем метод
            edit.open(event);
        })
    }
})

// закрытие форм place и edit
document.querySelectorAll('.popup__close')
.forEach(item => {
    item.addEventListener('click', event => {
        place.close(event);
        edit.close(event);
    })
})

// закрытие форм клавишей Escape
document.addEventListener('keydown', event => {
    place.closeFormEsc(event);
    edit.closeFormEsc(event);
})