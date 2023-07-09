"use strict";
const restaurent = {
  name: "Classico Italiano",
  location: "South West Delhi",
  Categories: ["Italian", "Organic", "Vegeterian", "Pizzeria"],
  starterMenu: ["Focassia", "Brescheta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["pizza", "pasta", "rissoto"],
  order: function (starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },
};
console.log(restaurent);
/* const arr = [2, 3, 4];
        const a = arr[0];
        const b = arr[1];
        const c = arr[2];
        array values is being destructured in x,y,z but this will not impact origional array
        const [x, y, z] = arr;
        console.log(x, y, z);
        console.log(arr);*/
let [main, , secondary] = restaurent.Categories;
console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);
console.log(restaurent.order(2, 0));
const [starterMenu, mainCourse] = restaurent.order(2, 0);
console.log([starterMenu, mainCourse]);

//Nested Destructuring
const arr = [2, 4, [3, 4]];
const [x, , [y, z]] = arr;
console.log(x, y, z);
