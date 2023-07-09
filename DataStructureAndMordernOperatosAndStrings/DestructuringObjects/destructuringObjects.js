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
};
//After Destructuring we can use RestaurentName, openingHours, Categories as separate variables but here
//Variable name is same as the property name
const { RestaurentName, openingHours, Categories } = restaurent;
console.log(RestaurentName, openingHours, Categories);
// console.log(
//   restaurent.RestaurentName,
//   restaurent.openingHours,
//   restaurent.Categories
// );
console.log(RestaurentName);
console.log(openingHours);
console.log(Categories);
// If you want to give them a new variable names
const {
  RestaurentName: Name,
  openingHours: hours,
  Categories: tags,
} = restaurent;
console.log(Name, hours, tags);
// If we are trying to read some property that does not exists we can give default value
//Below we are trying to read menu but that does not exists in restaurent object so it will print empty array.

const { menu = [], starterMenu: starters = [] } = restaurent;
console.log(menu, starters);
