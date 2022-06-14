const numberKm = parseInt(prompt('Quanti kilometri vuoi percorrere?'));
const userAge = parseInt(prompt('Quanti anni hai?'));
const pricePerKm = 0.21;
let ticketPrice = (numberKm * pricePerKm);

// (Se) Prima condizione: minore di 18 anni
if (userAge < 18) {
    ticketPrice = ticketPrice - (ticketPrice * 20 / 100);
}

// (Altrimenti se) Seconda condizione: over 65 anni
else if (userAge > 65) {
    ticketPrice = ticketPrice - (ticketPrice * 40 / 100);
}

console.log(ticketPrice.toFixed(2));