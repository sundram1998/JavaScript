"use strict";
const restaurent = {
  RestaurentName: "Classico Italiano",
  location: "South West Delhi",
  Categories: ["Italian", "Organic", "Vegeterian", "Pizzeria"],
  starterMenu: ["Focassia", "Brescheta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["pizza", "pasta", "rissoto"],
  // object
  openingHours: {
    thursday: {
      open: 12,
      close: 22,
    },
    friday: {
      open: 11,
      close: 23,
    },
    Saturday: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },
  orderDelevery: function ({
    starterIndex = 2,
    mainIndex = 1,
    time = 20,
    address = "Default Address",
  }) {
    console.log(
      `your order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delevered to ${address} at ${time} PM `
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },
};

const add = function (...numbers) {
  console.log(numbers);
  console.log(typeof numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(3, 4, 8);
add(3, 4, 5, 8);
/*Here In above functions it is taking the arguments and merging them into an array*/
