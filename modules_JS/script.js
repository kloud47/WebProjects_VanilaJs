// {} is needed if not default
// import { addTOCart, totalPrice as price, qty } from './shoppingCart.js';

console.log('Importing module.');
// addTOCart("bread", 6);
// ShoppingCart.addTOCart("Bread", 10);
// console.log(ShoppingCart.totalPrice + " " + ShoppingCart.qty);

// hoisting
// import * as ShoppingCart from './shoppingCart.js';// all exports at once:

import add, { cart } from './shoppingCart.js';// {} not needed
add('Bread', 9);
add('Apples', 10);
console.log(cart);

// imports are live connections not copy of the exports: