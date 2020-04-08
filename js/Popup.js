class Popup {
    constructor(container, openFormButton, form) {
        this.container = container;
        this.openFormButton = openFormButton;
        this.form = form;


        // открытие попапа place
        document.querySelector('.user-info__button')
        .addEventListener('click', (event) => {
          this.open(event);
        })
        // открытие попапа edit
        document.querySelector('.edit-profile__button')
        .addEventListener('click', (event) => {
          this.open(event);
        })
        // закрытие попап place/edit/image
        document.querySelectorAll('.popup__close')
        .forEach(item => {
            item.addEventListener('click', (event) => {
              this.close(event);
            })
        })
        // закрытие попап place/edit/image клавишей Escape
        document.addEventListener('keydown', (event) => {
          this.closeFormEsc(event);
        })
    }

    open(event) {
        if(event.target.classList.contains(this.openFormButton)) {
            this.container.classList.add('popup_is-opened');

            // открытие попапа картинки
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

    closeFormEsc(event) {
        if(event.key === 'Escape') {
            this.container.classList.remove('popup_is-opened');
        }
    }
}