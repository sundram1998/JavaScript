const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starter, mainCourse) {
    console.log(`Here is your ${starter} and Here is your ${mainCourse}`);
  },
};

const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);

console.log(
  ...restaurant.order(restaurant.starterMenu[1], restaurant.mainMenu[1])
);
