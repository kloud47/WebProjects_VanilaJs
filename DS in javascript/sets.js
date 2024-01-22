'use strict';

/// Set in Javascript: => Set(iterable):
// properties ->
// 1) iterable(looping possible)
// 2) dont have index
// 3) all values are unique


const orderSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta'
]);

console.log(orderSet);

console.log(new Set('Jonas'));

// set methods:
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('noodles');
orderSet.delete('Pizza');
// orderSet.clear();
console.log(orderSet);

for(const order of orderSet) console.log(order); 

/// array -> set:
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);

// size of unique elements in an array:
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

console.log(new Set('PriyanshuShukla').size);