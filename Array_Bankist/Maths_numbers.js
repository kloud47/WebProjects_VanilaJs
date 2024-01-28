'use strict';

console.log('numbers in js are: Floating point');

console.log(0.1 + 0.2);
console.log(+'23'); // converts string to number:

/// Parsing in js:
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('px3'));

console.log(Number.parseInt('30px', 8));
console.log(Number.parseInt('30px', 16));
console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));

/// Checking for Number:
console.log(Number.isNaN(20));
console.log(Number.isNaN(+"20x"));

/// Checkiing for infinite:
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(23/0));

console.log(Number.isInteger(39));
console.log(Number.isInteger(39.0));
console.log(Number.isInteger(39.01));

////// Maths ////////////////////////////////////////////////////////////
console.log(Math.sqrt(25));
console.log(25 ** (1/2));
console.log(8 ** (1/3));
console.log(8 ** 3);

console.log(Math.max(5, 18, 19, 9, 20, 0));
console.log(Math.max(5, 18, 19, 9, "20", 0));
console.log(Math.max(5, 18, 19, 9, "20px", 0));

console.log(Math.min(5, 18, 19, 9, "20", 1));

console.log(Math.PI * Number.parseFloat('10px')**2);
console.log(Math.trunc(Math.random()*6 + 1));

const randomInt = (min, max) => Math.trunc(Math.random()*(max-min) + 1) + min;
console.log(randomInt(5, 9));

console.log(Math.trunc(23.444));

console.log(Math.round(23.444));
console.log(Math.round(23.8));

console.log(Math.ceil(23.8));
console.log(Math.ceil(-23.8));

console.log(Math.floor(23.8));
console.log(Math.floor(-23.8));

/// Rounding decimals:
console.log((2.34).toFixed(0));
console.log((2.34).toFixed(1));
console.log((2.34336).toFixed(4));

//////////////////////////////////////////////////////
// Remainder operator //////
console.log(5 % 2);

///// Numeric separators ///////////////////////////////
const diameter = 287_460_000_000;
console.log(diameter);

/////////////////////////////////////////////////////////////////////////////////////
///// BigInt ////////////////////////////////////
console.log(2 ** 53 -  1);
console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 60);

console.log(17826316397162938712087301297312907210n);
console.log(BigInt(178263163971629387120));

console.log(1000n + 37298n);
// console.log(1000n + 37298); not possible:

///// Create Date //////////////////////////////////////////////////////////////////
const now = new Date();
console.log(now.toISOString());

console.log(new Date('December 24, 2015'));

console.log(new Date(2037, 10, 19, 15, 23, 5).toISOString()); // convert string to ISO date format:
console.log(new Date(2037, 10, 31));

console.log(new Date(3 * 24 * 60 * 60 * 1000));

//// working With date:
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());

console.log(Date.now());

/// Operations on dates:
const futureDate = new Date(2037, 10, 19, 15, 23);
console.log(Number(futureDate));
console.log(+futureDate);

const calcDaysPassed = (date1, date2) => 
Math.abs((date2 - date1) / 1000 / 60 / 60 / 24);

const days1 = calcDaysPassed(new Date(2037, 3, 30), new Date(2037, 3, 4));
console.log(days1);

//////////////////////////////////////////////////////////////////////////////////////////
/// Intl => Internalization API /////////
const num = 38888929.980;
const options = {
    // style: 'unit',
    // unit: 'mile-per-hour',s
    style: 'currency',
    currency: 'EUR'
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(navigator.language, new Intl.NumberFormat(navigator.language, options).format(num));

///////////////////////////////////////////////////////////////////////////////////////////////////
/// setTimeout //////////////
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout((ing1, ing2) => {
    console.log(`Here is your pizza. ${ing1} and ${ing2}`);
}, 3000, ...ingredients);
console.log('Waiting...');

if(ingredients.includes('spinach')) {
    clearTimeout(pizzaTimer);
    console.log('Timer cancelled.')
}

//// setinterval ///////////////////////////
// setInterval(() => {
//     const now = new Date();
//     console.log(now);
// }, 2000);