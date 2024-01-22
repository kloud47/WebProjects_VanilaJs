'use strict';

const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[3]);
console.log(plane[2]);

console.log(airline.length);
console.log('okoko'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal'));

//////(Slicing a string => substring):
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));//// extract first word:
console.log(airline.slice(airline.lastIndexOf(' ')+1, airline.length));//// extract last word:

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
    const s = seat.slice(-1);
    if(s === 'B' || s === 'E') console.log('You got a middle seat.');
    else console.log('You got lucky.');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

///////// when we apply methods to string ->
// javascript behind the scene converts string primitive into a object
console.log(new String('Priyanshu'));
console.log(typeof new String('Priyanshu')); // Object:
console.log(typeof new String('Priyanshu').slice(1, 4)); // back to string:

//////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//// Fix Capitalization:
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

/// Comparing Email:
const email = 'hello@gmail.io';
const loginEmail = '  Hello@Gmail.IO \n';
console.log(loginEmail.toLowerCase().trim());

///// Replacing parts of string:
const priceGB = '2BB,97#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace('door', 'gate'));

// using regular expression:
console.log(announcement.replace(/door/g, 'gate'));

/// Booleans:
const flight = 'Airbus A320neo';
console.log(flight.includes('A320'));
console.log(flight.includes('Boeing'));
console.log(flight.startsWith('Airb'));

if(flight.startsWith('Airbus') && flight.endsWith('neo'))
console.log('Part of the new airbus family.');

/////////(Spliting a string)//////////////////////////////////////////////////////////////////////
console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Priyanshu Shukla'.split(' ');
console.log(firstName, ' ', lastName);

const NewName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');// joining a string:
console.log(NewName);

/// Captalize a name:
const capitalizeName = function(name) {
    const names = name.split(' ');
    const nameCapital = [];

    for(const n of names) {
        // nameCapital.push(n[0].toUpperCase() + n.slice(1));
        nameCapital.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(nameCapital.join(' '));
}

capitalizeName('jessica ann smith davis');

///// Padding:
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('Jonas'.padStart(25, '+'));
console.log('Jonas'.padEnd(25, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(40, '='));


const maskCreditCard = (number) => {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4287484));
console.log(maskCreditCard(31983293829838));
console.log(maskCreditCard(99298898399908983));

///// repeat Method:
const message2 = 'Bad weather... all Departures Delayed';
console.log(message2.repeat(5));

///////////////////////////////////////////////////////////////////////////////////////////
/////////(String Practice)////////////////////
