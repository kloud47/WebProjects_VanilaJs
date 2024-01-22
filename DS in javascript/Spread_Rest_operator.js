'use strict';
///////////////////////////////////(Using Spread Operator)//////////////////////////////////////
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
    
    orderPasta: function(ing1, ing2 ,ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`);
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

const arr = [7, 8 ,9];
const newArr = [1, 2, 3, ...arr]; // Making shallow copy of array using spread operator:
console.log(newArr);
console.log(...newArr);

const NewMenu = [...restaurant.mainMenu, 'gajar'];
console.log(restaurant.mainMenu);
console.log(NewMenu);

// Copy array:
const mainMenuCopy = {...restaurant.mainMenu};
console.log(mainMenuCopy);

// Join 2 Array:
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// SpreadOperator is used for iterables => string, array, maps, set, (not Objects)

const str = 'Jonas';
const letters = [...str, ' ', 'S'];
console.log(letters);
console.log(...str);

/*const ingredients = [
    prompt("ingredient 1 => "),
    prompt("ingredient 2 => "),
    prompt("ingredient 3 => ")
]

console.log(ingredients);
restaurant.orderPasta(...ingredients);*/

/// Objects Spread Operator:
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Rome';
console.log(restaurantCopy);
console.log(restaurant);

///////////////////////////////////(Using Rest Operator)(it is opposite of spread)//////////////////////////////////////
const arrr = [1, 2, 3, 4, 5, 6];
const [a, b, ...others] = arrr;
console.log(a, b, others);

// Objects:
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// Functions: rest Operator
const add = (...numbers) => {
    let sum = 0;
    for(let i = 0; i<numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
};

add(2, 3);
add(2, 3, 4, 5);
add(2, 3, 4);
add(2, 3, 4, 5, 6, 7);