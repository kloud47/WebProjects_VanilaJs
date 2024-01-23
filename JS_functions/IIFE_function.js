'use strict';

const runOnce = function() {
    console.log("This will never run twice again.");
};
runOnce();

(function() {
    console.log('This will never run again.')
}) ();

(() => console.log("This will also never run again.")) ();

/// Private variable:
{
    const isPrivate = 23;
    var IsPrivate = 23;
}
// console.log(isPrivate);
console.log(IsPrivate);


//// conditional funtion //////////////////////////////////////////////////////
const num = 1;

let myfunc;
if(num > 10) {
    myfunc = function() {
        console.log("Condition funtion => num is >10");
    };
} else {
    myfunc = function() {
        console.log(num, 'is small')
    }
}

myfunc();