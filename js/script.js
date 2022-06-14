const numberKm = parseInt(prompt('Quanti kilometri vuoi percorrere?'));
const userAge = parseInt(prompt('Quanti anni hai?'));
const pricePerKm = 0.21;
let ticketPrice = (numberKm * pricePerKm);

// if (userAge < 18) {
//     ticketPrice = ticketPrice - (ticketPrice - 20 / 100);

// } else (userAge > 65)
// ticketPrice = ticketPrice - (100 / 40);


console.log(ticketPrice);