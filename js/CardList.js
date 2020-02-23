class CardList {
    constructor(container, initialCards) {
      this.container = container;
      this.initialCards = initialCards;
    }

    addCard(name, link) {
      const card = this.initialCards.create(
          name,
          link
      )

      this.container.insertAdjacentHTML('beforeend', card);
    }

    render(initialCards) {
      this.initialCards = initialCards;
      this.initialCards.forEach((card) => {
          this.addCard(card.name, card.link)
      })
    }
}

const cardList = new CardList(
    document.querySelector('.places-list'),
    card
);