'use strict';

////////////////////// (Default parameters) /*////////////////////////////////////////////

/// [primitive types] are passed by value:
const bookings = [];

const createBooking = function(flightNum, numPassengers = 1,
    price = 199*numPassengers) {
        /// old way of default parameters:
        // numPassengers ||= 1;
        // price ||= 199;
        
        const booking = {
            flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', undefined, 200);

/// [Object and arrays] are passed as reference(value = their address) to a function:

////////////////////// (Rest parameters) ////////////////////////////////////////////////////
function multiply(multiplier, ...theArgs) {
    return theArgs.map((x) => multiplier*x);
}

console.log(multiply(2, 1, 2, 3))