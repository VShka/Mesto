class Popup {
    constructor(container, openFormButton, form, btnOpen) {
        this.container = container;
        this.openFormButton = openFormButton;
        this.form = form;
        this.btnOpen = btnOpen;
        this.btnClose = document.querySelectorAll('.popup__close');

        // открытие попапа place/edit/image
        this._setEventListeners(this.btnOpen);
        // закрытие попап place/edit/image
        this._setEventListeners(this.btnClose);
        // закрытие попап place/edit/image клавишей Escape
        this._setEventListeners();
    }

    open(event) {
        if(event.target.classList.contains(this.openFormButton)) {
            this.container.classList.add('popup_is-opened');

            // картинка
            const popupImage = document.querySelector('.popup__image');
            // задаем картинки нужные параметры для отображения
            popupImage.setAttribute('src', `${event.target.style.backgroundImage.slice(5, -2)}`);
            popupImage.style.maxWidth = '80vw';
            popupImage.style.maxHeight = '80vh';
        } 
        
    }

    close(event) {
        if(event.target.classList.contains('popup__close')) {
            this.container.classList.remove('popup_is-opened');
            // проверка условия при сабмите
        } else if(this.form == this.form){
            this.form.classList.remove('popup_is-opened')
        } 
    }

    _closeFormEsc(event) {
        if(event.key === 'Escape') {
            this.container.classList.remove('popup_is-opened');
        }
    }

    _setEventListeners(btn) {
        if(btn == this.btnOpen) {
            this.btnOpen.addEventListener('click', event => {
                this.open(event);
            });
        } else if(btn == this.btnClose) {
            this.btnClose.forEach(item => {
                item.addEventListener('click', event => {
                    this.close(event);
                })
            });
        } else if(btn == undefined) {
            document.addEventListener('keydown', (event) => {
                this._closeFormEsc(event);
            });
        }
    }
}