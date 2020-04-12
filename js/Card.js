class Card {
    constructor() {
    }
// создание карточки

create(name, link) {
    const cardContainer = document.createElement('div');
    const cardImage = document.createElement('div');
    const buttonDelete = document.createElement('button');
    const cardDescription = document.createElement('div');
    const cardName = document.createElement('h3');
    const buttonLike = document.createElement('button');

    cardContainer.classList.add('place-card');
    cardImage.classList.add('place-card__image');
    buttonDelete.classList.add('place-card__delete-icon');
    cardDescription.classList.add('place-card__description');
    cardName.classList.add('place-card__name');
    buttonLike.classList.add('place-card__like-icon');

    cardImage.setAttribute('style', `background-image: url(${link})`);
    cardName.textContent = name;

    cardContainer.appendChild(cardImage);
    cardImage.appendChild(buttonDelete);
    cardContainer.appendChild(cardDescription);
    cardDescription.appendChild(cardName);
    cardDescription.appendChild(buttonLike);
    
    cardContainer.querySelector('.place-card__like-icon').addEventListener('click', () => {
        this._like(event);
    });
    cardContainer.querySelector('.place-card__delete-icon').addEventListener('click', () => {
        this._remove(event);
    });

    // спорный момент (надо не забыть попробовать убрать вызов инородного метода)
    cardContainer.addEventListener('click', () => {
        imagePopup.open(event);
    });

    
    return cardContainer;
}
// лайк/дизлайк
    _like(event) {
        event.target.classList.toggle('place-card__like-icon_liked');
    }
// удаление карточки
    _remove(event) {
        event.target.closest('.place-card').remove();
    }
}
