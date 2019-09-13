'use strict';

let input;
let total = 0;

while (true) {
  input = prompt('Введите число');

  if (input === null) {
    break;
  }

  input = Number(input);

  total += input;
}

console.log(total);
let message = `Общая сумма чисел равна ${total}`;
alert(message);