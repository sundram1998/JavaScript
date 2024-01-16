"use strict";
let age = 2;
const result = age >= 18 ? "You can drink wine" : "You should drink water";
console.log(result);

function ternaryConditions(age) {
  let result = age > 18 ? "Wine" : "Water";
  return result;
}
console.log(ternaryConditions(26));

const ternaryConditions1 = function (age) {
  let result = age > 18 ? "Wine" : "Water";
  return result;
};
console.log(ternaryConditions1(17));
