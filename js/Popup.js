class Popup {
    constructor(container, openFormButton, form) {
        this.container = container;
        this.openFormButton = openFormButton;
        this.form = form;
    }

    open(event) {
        if(event.target.classList.contains(this.openFormButton)) {
            this.container.classList.add('popup_is-opened');
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

    closeFormEsc(event) {
        if(event.key === 'Escape') {
            this.container.classList.remove('popup_is-opened');
        }
    }
}