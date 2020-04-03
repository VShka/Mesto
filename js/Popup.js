class Popup {
    constructor(container) {
        this.container = container;
    }

    open(event, openFormButton) {
        if(event.target.classList.contains(openFormButton)) {
            this.container.classList.add('popup_is-opened');
        }
    }

    close(event, form) {
        if(event.target.classList.contains('popup__close')) {
            this.container.classList.remove('popup_is-opened');
        } else if(form == form){
            form.classList.remove('popup_is-opened')
        } 
    }

    closeFormEsc(event) {
        if(event.key === 'Escape') {
            this.container.classList.remove('popup_is-opened');
        }
    }
}