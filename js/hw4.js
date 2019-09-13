'use strict';

const credits = 23580;
const pricePerDroid = 3000;

let message;

const order = prompt('количество дроидов?');
const totalPrice = order * pricePerDroid;
const residualAmount = credits - totalPrice;
const comparingAmounts = totalPrice <= credits;

if (order === null) {
  message = 'Отменено пользователем!'; 
} else if (comparingAmounts) {
  message = `Вы купили ${order} дроидов, на счету осталось ${residualAmount} кредитов.`;
} else {
  message = 'Недостаточно средств на счету!';
}


console.log(message);
