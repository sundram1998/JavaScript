"use strict";
const rest = new Map();
console.log(rest);
rest.set("name", "Classico Italiano");
rest.set(1, "Firenzy,Itely");
console.log(rest.set(2, "Lisban,Portugal"));

rest
  .set("Categories", ["Italian", "Pizzaria", "Vegetarian", "organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open at :D")
  .set(false, "We are closed at :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));
console.log("To check if map has:");
console.log(rest.has("Categries"));
console.log("======================================================");
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
console.log(roots);

const square = numbers.map((x) => x ** 2);
console.log(square);
console.log("======================================================");
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);
console.log("======================================================");
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ignored by map() since length is 3
};
console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
// [ 4, 9, 16 ]
console.log("======================================================");
const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log("======================================================");
console.log(
  [1, , 3].map((x, index) => {
    console.log(`Visit ${index}`);
    return x * 2;
  })
);

const question = new Map([
  ["question", "what is the best programing language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "correct✔"],
  [false, "Try Again!"],
]);
console.log(question);

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

const openingHours = {
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
};

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = prompt("Enter the value");
if (answer === "3") {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}

console.log(question.get("correct") === answer);
