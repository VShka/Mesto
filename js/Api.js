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
    .catch(err => console.log(err));
  }
  
  // подгружаем с сервера карточки
  getInitialCards() {
    return fetch(`${this.url}/cards`, {
        headers: this.headers
    })
    .then(this.checkRequest)
    .catch(err => console.log(err));
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
    .catch(err => console.log(err));
  }

  // проверка состояния запроса
  checkRequest(res) {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
}