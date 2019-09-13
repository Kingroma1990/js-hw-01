'use strict';

const deliveryCountry = prompt('Страна доставки');
const inUpperCase = deliveryCountry.toUpperCase();
let message;
let messageNot;

const countryChina = 'КИТАЙ';
const priceChina = 100;

const countryChile = 'ЧИЛИ';
const priceChile = 250;

const countryAustralia = 'АВСТРАЛИЯ';
const priceAustralia = 170;

const countryIndia = 'ИНДИЯ';
const priceIndia = 80;

const countryJamaica = 'ЯМАЙКА';
const priceJamaica = 120;

switch (inUpperCase) {
  case countryChina:
    message = `Доставка в ${countryChina} будет стоить ${priceChina} кредитов`;
    break;

  case countryChile:
    message = `Доставка в ${countryChile} будет стоить ${priceChile} кредитов`;
    break;

  case countryAustralia:
    message = `Доставка в ${countryAustralia} будет стоить ${priceAustralia} кредитов`;
    break;

  case countryIndia:
    message = `Доставка в ${countryIndia} будет стоить ${priceIndia} кредитов`;
    break;

  case countryJamaica:
    message = `Доставка в ${countryJamaica} будет стоить ${priceJamaica} кредитов`;
    break;

  default:
    messageNot = 'В вашей стране доставка не доступна';
}

console.log(message);
alert(messageNot);
