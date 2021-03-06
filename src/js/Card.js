export default class Card {
  constructor(name, link, likes, cardId, userId, openMethod, imageIncreased, ownerId, api) {
    this.imagePopupMethod = openMethod;
    this.imageIncreased = imageIncreased;
    this.ownerId = ownerId;
    this.api = api;
    
    this.name = name;
    this.link = link;
    this.likes = likes;
    this.cardId = cardId;
    this.userId  = userId;

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
    const cardIsLiked = this.likes.some(item => this.ownerId === item._id);
    

    cardContainer.classList.add('place-card');
    cardImage.classList.add('place-card__image');
    buttonDelete.classList.add('place-card__delete-icon');
    cardDescription.classList.add('place-card__description');
    cardName.classList.add('place-card__name');
    placeCardLikeContainer.classList.add('place-card__like-container');
    buttonLike.classList.add('place-card__like-icon');
    counterLikes.classList.add('place-card__like-counter');

    cardContainer.setAttribute('id', `${this.cardId}`);
    cardImage.setAttribute('style', `background-image: url(${this.link})`);
    cardName.textContent = this.name;
    counterLikes.textContent = this.likes.length;

    cardContainer.appendChild(cardImage);
    cardImage.appendChild(buttonDelete);
    cardContainer.appendChild(cardDescription);
    cardDescription.appendChild(cardName);
    cardDescription.appendChild(placeCardLikeContainer);
    placeCardLikeContainer.appendChild(buttonLike);
    placeCardLikeContainer.appendChild(counterLikes);

    // проверка, ставил ли лайк пользователь
    if (cardIsLiked === true) {
      buttonLike.classList.add('place-card__like-icon_liked');
    }
    // проверка пользователя на добавлении иконки удаления карточки(удалять можно только свои карточки)
    if (this.ownerId !== this.userId) {
      buttonDelete.setAttribute('style', 'display: none');
    }

    this.cardElem = cardContainer;
    this.setEventListener();

    return this.cardElem;
  }

  // лайк/дизлайк
  _like(event) {
    const cardLikesCounter = this.cardElem.querySelector('.place-card__like-counter');

    if (event.target.closest('.place-card__like-icon_liked')) {
      this.api.deleteLikes(this.cardId)
      .then(card => {
        cardLikesCounter.textContent = card.likes.length;
      })
      .catch(err => console.error('Error', err));
    } else {
      this.api.putLikes(this.cardId)
      .then(card => {
        cardLikesCounter.textContent = card.likes.length;
      })
      .catch(err => console.error('Error', err));
    }
    event.target.classList.toggle('place-card__like-icon_liked');
  }

  // удаление карточки
  _remove(event) {
    if (confirm('Вы действительно хотите удалить карточку?')) {
      this.api.deleteCard(this.cardId)
      .then(() => {
        this._removeEventListener();
        event.target.closest('.place-card').remove();
      })
      .catch(err => console.error('Error', err));
    }
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
    this.imageIncreased.setAttribute('src', `${this.link}`);
  }
}
