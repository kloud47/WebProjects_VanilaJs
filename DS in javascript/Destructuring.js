'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({time, address, mainIndex, starterIndex}) {
    console.log(time);
    console.log(address);
    console.log(mainIndex);
    console.log(starterIndex);
  },

  openingHours: {
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
    },
  },
};

const arr = [2, 3, 4];
///////////////////////////////////////////////////////////////////////////////////
//destructuring Array:///////////////////////////////////////////////////////////
const [x, y, z] = arr;
console.log(x, y, z);

let [first, , second] = restaurant.categories;
console.log(first, second);

[first, second] = [second, first];
console.log(first, second);  /// reversed:

const [i, j] = restaurant.order(2, 0);
console.log(i, j);

// Nested destructuring:
const nested = [1, 2, [3, 4]];
const [l, , [m, n]] = nested;
console.log(l, m, n);

// default values:
// const [p , q, r] = [8, 9];
// console.log(p, q, r);

const [p=1 , q=1, r=1] = [8, 9];
console.log(p, q, r);


///////////////////////////////////////////////////////////////////////////////////
//destructuring Objects:////////////////////////////////////////////////////////////
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {// destructuring with different names:
  name: restaurantName,
  openingHours: Hours,
  categories: tags
} = restaurant;

console.log(restaurantName, Hours, tags);

/// replacing of arrays:
let a = 100;
let b = 200;
const obj = {a: 23, b: 7, c: 20};
({a, b} = obj);
console.log(a,b);

/// Nested objects:
const {fri} = openingHours;
console.log(fri);

const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);

// Destructuring in function:
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2
});

