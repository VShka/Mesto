class Card {
  constructor(name, link, likes, openMethod, popupImage, api) {
    this.imagePopupMethod = openMethod;
    this.popupImage = popupImage;
    this.api = api;
    
    this.name = name;
    this.link = link;
    this.likes = likes;

    this.like = this._like.bind(this);
    this.remove = this._remove.bind(this);
    this.openImage = this._openImage.bind(this);
  }
  // создание карточки

  create() {
    const cardContainer = document.createElement('div');
    const cardImage = document.createElement('div');
    const buttonDelete = document.createElement('button');
    const cardDescription = document.createElement('div');
    const cardName = document.createElement('h3');
    const placeCardLikeContainer = document.createElement('div');
    const buttonLike = document.createElement('button');
    const counterLikes = document.createElement('p');

    cardContainer.classList.add('place-card');
    cardImage.classList.add('place-card__image');
    buttonDelete.classList.add('place-card__delete-icon');
    cardDescription.classList.add('place-card__description');
    cardName.classList.add('place-card__name');
    placeCardLikeContainer.classList.add('place-card__like-container');
    buttonLike.classList.add('place-card__like-icon');
    counterLikes.classList.add('place-card__like-counter');

    cardImage.setAttribute('style', `background-image: url(${this.link})`);
    cardName.textContent = this.name;
    counterLikes.textContent = this.likes;

    cardContainer.appendChild(cardImage);
    cardImage.appendChild(buttonDelete);
    cardContainer.appendChild(cardDescription);
    cardDescription.appendChild(cardName);
    cardDescription.appendChild(placeCardLikeContainer);
    placeCardLikeContainer.appendChild(buttonLike);
    placeCardLikeContainer.appendChild(counterLikes);

    this.cardElem = cardContainer;
    this.setEventListener();

    return this.cardElem;
  }

  // лайк/дизлайк
  _like(event) {
    event.target.classList.toggle('place-card__like-icon_liked');
  }

  // удаление карточки
  _remove(event) {
    this._removeEventListener();
    this.api.deleteCard();
    event.target.closest('.place-card').remove();
  }

  setEventListener() {
    this.cardElem.querySelector('.place-card__like-icon').addEventListener('click', this.like);
    this.cardElem.querySelector('.place-card__delete-icon').addEventListener('click', this.remove);
    this.cardElem.addEventListener('click', this.openImage);
  }

  _removeEventListener() {
    this.cardElem.querySelector('.place-card__like-icon').removeEventListener('click', this.like);
    this.cardElem.querySelector('.place-card__delete-icon').removeEventListener('click', this.remove);
    this.cardElem.removeEventListener('click', this.openImage);
  }

  _openImage(event) {
    this.imagePopupMethod(event);
    this.popupImage.setAttribute('src', `${this.link}`);
  }
}
