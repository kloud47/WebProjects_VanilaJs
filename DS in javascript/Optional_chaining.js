'use strict';

const restaurant = {
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

    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

if(restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);

//// with optional chaining:
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of weekdays) {
    const open = restaurant.openingHours[day]?.open ?? "closed";// Nullsih coalacing and optional chaning together:
    console.log(`On ${day}, we open at ${open}`);
}

// For methods:
console.log(restaurant.order?.(0,2) ?? 'Method does not exist');
console.log(restaurant.orders?.(0,1) ?? 'Method does not exist');

/// Arrays:
const users = [{name: 'Jonas', email: 'Priyanshu@gmail.com'}];
console.log(users[0]?.name ?? 'User array is empty');