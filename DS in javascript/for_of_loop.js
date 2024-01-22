'use strict';

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

//// (For of loop) //////////////////////////////////////////
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const items of menu) console.log(items); // can use continue and break:

for(const items of menu.entries()) console.log(items);
for(const items of menu.entries()) console.log(...items);

for(const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);