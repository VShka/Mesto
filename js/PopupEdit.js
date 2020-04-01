class PopupEdit extends PopupPlace {
    constructor(container) {
        super(container);
    }

    open(event) {
        if(event.target.classList.contains('edit-profile__button')) {
            this.container.classList.add('popup_is-opened');
        }
    }
}