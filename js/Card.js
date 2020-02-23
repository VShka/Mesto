class Card {
    constructor(initialCards) {
      this.link = initialCards.link;
      this.name = initialCards.name;
    }
// создание карточки
    create() {
        return `<div class="place-card">
                <div class="place-card__image" style="background-image: url(${this.link})">
                    <button class="place-card__delete-icon"></button>
                </div>
                <div class="place-card__description">
                    <h3 class="place-card__name">${this.name}</h3>
                    <button class="place-card__like-icon"></button>
                </div>
          </div>`;
    }
// лайк/дизлайк
    like(event) {
      if (event.target.classList.contains('place-card__like-icon')) {
          event.target.classList.toggle('place-card__like-icon_liked');
      }
    }
// удаление карточки
    remove(event) {
        if (event.target.classList.contains('place-card__delete-icon')) {
            event.target.closest('.place-card').remove();
        }
    }
}

const card = new Card(initialCards);