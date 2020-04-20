class Card {
  constructor(openMethod, popupImage) {
    this.imagePopupMethod = openMethod;
    this.popupImage = popupImage;

    this.like = this._like.bind(this);
    this.remove = this._remove.bind(this);
    this.openImage = this._openImage.bind(this);
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
    // Можно лучше
    // чтобы не парсить URL нужно сохранить его при создании карточки, а тут просто передать
    this.popupImage.setAttribute('src', `${event.target.style.backgroundImage.slice(5, -2)}`);
  }
}
