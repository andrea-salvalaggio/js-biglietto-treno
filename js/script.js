const numberKm = parseInt(prompt('Quanti kilometri vuoi percorrere?'));
const userAge = parseInt(prompt('Quanti anni hai?'));
const pricePerKm = 0.21;
let ticketPrice = numberKm + userAge + pricePerKm;

console.log(ticketPrice);