class Api {
  constructor(options) {
    this.url = options.baseUrl;
    this.headers = options.headers;
  }

  // получаем данные о пользователе с сервера
  getUserData() {
    return fetch(`${this.url}/users/me`, {
        headers: this.headers
    })
    .then(this.checkRequest)
    .catch(this.catchErr);
  }
  
  // подгружаем с сервера карточки
  getInitialCards() {
    return fetch(`${this.url}/cards`, {
        headers: this.headers
    })
    .then(this.checkRequest)
    .catch(this.catchErr);
  }
  
  // обновляем данные о пользователе
  updateUserData(event) {
    return fetch(`${this.url}/users/me`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
          name: event.currentTarget.elements.name.value,
          about: event.currentTarget.elements.job.value,
        })
    })
    .then(this.checkRequest)
    .catch(this.catchErr);
  }

  addNewCard(event) {
    return fetch(`${this.url}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: event.currentTarget.elements.name.value,
        link: event.currentTarget.elements.link.value
      })
    })
    .then(this.checkRequest)
    .catch(this.catchErr);
  }

  deleteCard(id) {
    return fetch(`${this.url}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(this.checkRequest)
    .catch(this.catchErr);
  }

  putLikes(cardId) {
    return fetch(`${this.url}/cards/like/${cardId}`, {
      method: 'PUT',
      headers: this.headers
    })
    .then(this.checkRequest)
    .catch(this.catchErr);
  }

  deleteLikes(cardId) {
    return fetch(`${this.url}/cards/like/${cardId}`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(this.checkRequest)
    .catch(this.catchErr);
  }


  // проверка состояния запроса
  checkRequest(res) {
    if (res.ok) return res.json();
    return Promise.reject(new Error(res.status));
  }

  // отлов ошибки
  catchErr(err) {
    return Promise.reject(new Error(err.message));
  }
}