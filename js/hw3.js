'use strict';

const ADMIN_PASSWORD = 'qwerty';
let message;

const userChoise = prompt('Введите пароль');

if (userChoise === null) {
  message = 'Отменено пользователем!';
} else if (userChoise === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
