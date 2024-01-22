'use strict';

const power = 'Understanding'

const obj = {
    name: 'Priyanshu',
    number: 47,
    /// ES6 enhanced objects literals:
    power,

    add: function(a, b) {return a+b;},

    subtract(a, b) {return a-b;}// new way of writing functions:
};
console.log(obj);



const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours =  {
    [weekdays[1]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5] + ' ok']: {
        open: 0, // Open 24 hours
        close: 24,
    },
};
console.log(openingHours);