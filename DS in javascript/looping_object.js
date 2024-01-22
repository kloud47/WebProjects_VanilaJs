'use strict';

const openingHours = {
    thu: {
        open: 12,
        close: 22,
        },
        fri: {
        open: 11,
        close: 23,
        },
        sat: {
        open: 0, // Open 24 hours
        close: 24,
    }
};

////////////// (Object Keys):
const key = Object.keys(openingHours);
console.log(key);/// Array of keys of object openingHous:

let openStr = `We are open on ${key.length} days: `;

for(const days of key) { // Looping:
    openStr += `${days}, `;
}
console.log(openStr); console.log('');

////////////// (Object values):
const value = Object.values(openingHours);
console.log(value);
console.log('');

///////////// (Object Entries):
const entry = Object.entries(openingHours);
console.log(entry);

for(let [day, {open, close}] of entry) {
    console.log(`On ${day} we open at ${open} and close at ${close}.`);
};