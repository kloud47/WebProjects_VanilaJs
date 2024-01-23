'use strict';

const oneWord = function(str) { // makes a single word:
    // return str.replace(/ /g, '').toLowerCase();
    return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function(str) { // Capitalize first word:
    const [first, ...other] = str.split(' ');
    return [first.toUpperCase(), ...other].join(' ');
};

console.log(upperFirstWord('hello all'));

/////////// ((((((((Higher-Order functions)))))))):

//// CallBack functions:
const transformer = function(str, func) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${func(str)}`);
    console.log(`Transformed by: ${func.name}`);
};
transformer("Javascript is the best!", oneWord); // Here OneWord functions are call back functions:

//// functions returning functions:
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}!`);
    }
};
const greetHey = greet('Hey');
greetHey('Jonas');
greetHey('Priyanshu');

greet('Hello')('Anokhi');

/// using arrow functions:
const greeting = greet => name => console.log(`${greet} ${name}!`);
greeting('Howdy')('phillip');

//// Call Method in functions:
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    book(flight_num, name) {
        console.log(
            `${name} booked a seat on ${this.airline} 
            flight ${this.iataCode}${flight_num}`
            );
        this.bookings.push({ flight: `${this.iataCode}${flight_num}`, name});
    }
};

lufthansa.book(293, 'Priyanshu Shukla');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, 'Sarah Williams');
book.call(eurowings, 23, 'Sarah Williams');
book.call(eurowings, 23, 'Priyanshu Shukla');
console.log(eurowings);

book.call(lufthansa, 23, 'Sarah Williams');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

///// Apply method:
book.apply(swiss, [583, 'George Cooper']);

const flightData = [322, 'Tony Stark'];
book.call(swiss, ...flightData);

console.log(swiss);

//// Bind Method:
const bookEW = book.bind(eurowings);
bookEW(233, 'Steven Williams');
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23); /// Partial Application:
bookEW23('Jonas Schmedtmann');
console.log(eurowings);
//////////////////////////////////////////////////////////////////////////////////////////////////
/// With Event listener:
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    // console.log(this);
    this.planes++;
    console.log(this.planes);
};

document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

/// Partial Application:
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(300));
console.log(addVAT(30));

/////////////////////////////////////
const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(300));