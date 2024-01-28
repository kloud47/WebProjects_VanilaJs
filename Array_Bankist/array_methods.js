'use strict';

///// (Slice method) /////////////////
const arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(2, 4));
console.log(arr.slice(1, -2));
///// Shallow copy:
const arr1 = arr.slice();
const arr2 = [...arr];
console.log(arr1, arr2);

///// (Splice method)(Mutates the original array) /////////////////
console.log('removed => ', arr.splice(3));
console.log('removed last => ', arr.splice(-1));
console.log('new array => ', arr);

//// REVERSE (Mutates the original array) //////////////
const arrr1 = ['a', 'b', 'c', 'd', 'e'];
const arrr2 = ['i', 'j', 'k', 'l', 'm'];
console.log(arrr2.reverse());
console.log('mutated => ',arrr2);

//// CONCAT (Makes a new array) ////////////
const letters = arrr1.concat(arrr2);
console.log(letters);
const letters2 = [...arrr1, ...arrr2];
console.log(letters2);

//// JOIN
console.log(letters.join('-'));

/////////////////////////////////////////////////////////////////////////////////
//// AT method////////
const arry = [23, 11, 64];
console.log(arry[0]);
console.log(arry.at(0));

/// getting the last element:
console.log(arry[arry.length - 1]);
console.log(arry.slice(-1)[0]);
console.log(arry.at(-1));
console.log(arry.at(-2));

console.log('Jonas'.at(0)); // Also works on string:

//////////////////////////////////////////////////////////////////////////////////
//// Looping in array:
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for(const  [i, x] of movements.entries()) {
    console.log(` Movement ${i+1} You ${x>0? 'deposited':'withdrew'} ${Math.abs(x)}`) 
};
console.log('---------------------------------------')
//// ((((((((for Each loop)))))))) (break and continue not work in forEach loop):

///// array.forEach(function(currentValue, index, arr), thisValue) /////////////////
movements.forEach(function(element, index, array) {
    element > 0 ?
    console.log(`+ Movement ${index+1}: You deposited ${element}`) 
    : console.log(`- Movement ${index+1}: You withdrew ${Math.abs(element)}`);
});

//// forEach on map:
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound Sterling']
]);

currencies.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`);
});

/// forEach on set:
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
currenciesUnique.forEach(function(value, key, set){
    console.log(`${key}: ${value}`);
    /// Key == value in set since set are not ordered:
});

////////////////////////////////////////////////////////////////////////////////////////////////
///////// Map Method in arrays (returns a new array)//////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;
const movementsUSD = movements.map((mov) => mov*eurToUSD );
console.log(movementsUSD);

const anotherMovement = movements.map((mov, i, array) => {
    return `Movement ${i+1}: You ${mov > 0? 'deposited':'withdrew'} ${Math.abs(mov)}`;
});
console.log(anotherMovement);
/////////////////////////////////////////////////////////////////////////////////
//// Filter Method in arrays (returns a new array) ////////////////////////////////////////////
const deposits = movements.filter((mov) => mov>0);
console.log(deposits);

const withdrawal = movements.filter((mov) => mov<0);
console.log(withdrawal);

/////////////////////////////////////////////////////////////////////////////////
//// Reduce Method in arrays (returns a new single value) ////////////////////////////////////////////
const balance = movements.reduce((accumulator, curr, i, arr) => accumulator+curr ,/*initial value*/0);
console.log(balance);

const maximumNumber = movements.reduce((acc, curr) => {
    return acc = curr > acc? curr : acc;
}, movements[0]);
console.log(maximumNumber);

/////////////////////////////////////////////////////////////////////////////////
//// Chaining methods //////////////////////////
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov*eurToUSD).reduce((acc, mov) => acc+mov, 0);
console.log(totalDepositsUSD);

/////////////////////////////////////////////////////////////////////////////////////////
//// Find method in array (returns the first element satishfying the first condition)/////////////////////////////////////
const firstWithrawwal = movements.find(mov => mov < 0);
console.log(firstWithrawwal);

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};
const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};
const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};
const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};
const accounts = [account1, account2, account3, account4];

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

///// findIndex method in array //////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////
///// Some method in array (checking for given condition)////////////////////
console.log(movements.some(mov => mov > 0));
console.log(movements.includes(-130)); // checks for equality:
console.log(movements.some(mov => mov === -130));

//// Every method in array (checking for given condition for all elements) ///////////////
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//////////////////////////////////////////////////////////////////////////////////////////////
////// Flatening an array ////////////////////////////////////////
const array = [[1, 2], [3, 4, 5], 6, 7];
console.log(array.flat());

const arrdeep = [[[1, 2], 3], [4, 5, [6, 7]], 8];
console.log(arrdeep.flat());
console.log(arrdeep.flat(2));

const overallBalance = accounts.map(mov => mov.movements).flat(1).reduce((acc, mov) => acc+mov, 0);
console.log(overallBalance);

/// Flat map method (flatens and maps)/////////////////////////////
const overallBalance2 = accounts.flatMap(mov => mov.movements).reduce((acc, mov) => acc+mov, 0);
console.log(overallBalance2);

/////////////////////////////////////////////////////////////////////////////////////////////
///// Sorting in an array (Mutates the original array) /////////////////////////////////////////
const owners = ['jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

// method 1:
// movements.sort((a, b) => {
//     return a > b?  1 :-1;
// });
console.log(movements);

// method 2:
movements.sort((a, b) => a - b);
console.log(movements);

// movements.sort((a, b) => {
//     return a > b?  -1 :1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

/////////////////////////////////////////////////////////////////////////////////////////////
/// Ways of creating an array:

console.log(new Array(1, 2, 3,4 ,5, 6));

const x = new Array(7);
console.log(x);

//// Fill method ///////////////////////////////
// x.fill(1);
// console.log(x);

x.fill(1, 3, 5);
console.log(x);

const y = Array.from({length: 7}, (curr, i) => 1+i);
console.log(y);