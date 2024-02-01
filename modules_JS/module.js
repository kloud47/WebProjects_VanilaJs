'use strict';

// module pattern - using | IIFE | =>

const shoppingCart2 = (function() {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQty = 23;

    const addToCart = function (product, qty) {
        cart.push({ product, qty });
        console.log(`${qty} ${product} added to cart`);
    };

    const orderStock = function (product, qty) {
        console.log(`${qty} ${product} ordered from supplier.`)
    };

    return { // all this data can be made public:
        cart, 
        addToCart,
        totalPrice, 
        totalQty 
    };
})();

shoppingCart2.addToCart('apple', 3);// due to closures => it works
shoppingCart2.addToCart('bread', 10);
console.log(shoppingCart2.cart);
console.log(shoppingCart2.shippingCost);// since its private