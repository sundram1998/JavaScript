/*The spread (...) syntax allows an iterable, such as an array or string,
 to be expanded in places where zero or more arguments (for function calls)
  or elements (for array literals) are expected.
 In an object literal, the spread syntax enumerates the properties of an object
  and adds the key-value pairs to the object being created.

Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements,
 while rest syntax collects multiple elements and "condenses" them into a single element.
 See rest parameters and rest property.*/
//=========================================================================================
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
//===============================================================================
const arr = [7, 8, 9];
const badNewArr = [2, 3, 4, arr[0], arr[1], arr[2]];
let goodNewArr = [2, 3, 4, ...arr];
console.log("badNewArr: ", badNewArr);
console.log("goodNewArr: ", goodNewArr);
goodNewArr = [...arr, ...badNewArr];
console.log("goodNewArr: ", goodNewArr);

const newMenu = [...restaurent.starterMenu, "Daliya"];
console.log(newMenu);
const mainMenuCopy = [...restaurent.starterMenu];
mainMenuCopy.push("Dal Makhani");
console.log(mainMenuCopy);
console.log(restaurent.starterMenu);

const menu = [...restaurent.starterMenu, ...restaurent.mainMenu];
console.log(menu);

console.log(
  restaurent.orderDelevery({
    starterIndex: 0,
    mainIndex: 1,
    time: 10.0,
    address: "South West Yamuna Nagar Delhi",
  })
);
// Real world example
console.log(restaurent.orderDelevery({}));
const ingridient = [
  // prompt("Let's make pasta! ingredient 1?"),
  // prompt("ingredient 2?"),
  // prompt("ingredient 3?"),
];
console.log(ingridient);
restaurent.orderPasta(ingridient[0], ingridient[1], ingridient[2]);
restaurent.orderPasta(...ingridient);

const name1 = "SUNDRAM";
console.log(...name1);
const letters = [...name1, " ", "Y"];
console.log(letters);

//Objects
const newRestaurante = {
  ...restaurent,
  founder: "Sundram Yadav",
  FoundedIn: 1998,
};
console.log(newRestaurante);
newRestaurante.RestaurentName = "Bellissimo Deliciosa Alimento";
console.log(newRestaurante);
