'use strict';

/*const secureBooking = function() {
    let passengerCount = 0;

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();

booker();
booker();
booker(); 

console.dir(booker);

// console.error('ok');
// console.profile();

///// Example 1:
let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    };
};

const h = function() {
    const b = 733;
    f = function() {
        console.log(b *  3);
    };
};

g();
f();
console.dir(f);
/// Re-assigning f function
h();
f();
console.dir(f);

///// Example 2:
const boardPassengers = function(n, wait) {
    const perGroup = n/3;

    setTimeout(function() {
        console.log(`We are now borading all ${n} passengers.`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} sec.`);
};
boardPassengers(180, 3);*/

///////////////////////////////////////////////////////////////////////////////
/// call method //////////////////////////////////////////////
const person = {
    fullname : function() {
        console.log(this.firstName + ' ' + this.lastName);
    }
}

const person1 = {
    firstName: 'Priyanshu',
    lastName: 'Shukla',
}

const person2 = {
    firstName: 'Anokhi',
    lastName: 'Shukla',
}
person.fullname.call(person2);
person.fullname.call(person1);

const FULL = person.fullname.bind(person2);
FULL();

/// bind method (returns a function)//////////////////////////////////////////////
const c1 = {
    x: 5,
    y: 10,
}
const c2 = {
    x: 75,
    y: 235,
}
function printCoords() {
    console.log(this.x + ',' + this.y);
}
const c1_func = printCoords.bind(c1);
const c2_func = printCoords.bind(c2);

c1_func();
c2_func();