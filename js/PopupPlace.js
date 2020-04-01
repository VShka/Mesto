class PopupPlace {
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