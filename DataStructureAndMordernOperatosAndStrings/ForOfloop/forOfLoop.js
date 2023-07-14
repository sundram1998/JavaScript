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

const menu = [...restaurent.starterMenu, ...restaurent.mainMenu];
console.log(menu);
console.log(
  "=================================================================="
);
for (const item of menu) {
  console.log(item);
}
console.log(
  "=================================================================="
);
for (const item of menu.entries()) {
  console.log(item);
}
console.log(
  "=================================================================="
);
console.log(...menu.entries());
console.log(
  "=================================================================="
);
console.log([...menu.entries()]);
console.log(
  "=================================================================="
);
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}:${item[1]}`);
}
console.log(
  "=================================================================="
);
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}
