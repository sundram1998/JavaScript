"use strict";
// Java script is case senitive
const foodOrders = new Set(["Pasta", "pizza", "pizza", "Pasta", "rissotto"]);
console.log(foodOrders);
console.log(typeof foodOrders);

foodOrders.add("Burger");
console.log(foodOrders);
for (const i of foodOrders) {
  console.log(i);
}

console.log(new Set("jonas"));
console.log(foodOrders.size);

const staff = ["waiter", "chef", "manager", "waiter", "chef", "manager"];
const staffSet = [...new Set(staff)];
console.log(staffSet);
console.log(staffSet.length);
console.log(
  new Set(["waiter", "chef", "manager", "waiter", "chef", "waiter"]).size
);
