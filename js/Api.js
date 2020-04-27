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
  updateUserData(name, job) {
    return fetch(`${this.url}/users/me`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          about: job
        })
    })
    .then(this.checkRequest)
    .catch(this.catchErr);
  }

  addNewCard(name, link) {
    return fetch(`${this.url}/cards`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link,
      })
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