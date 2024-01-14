"use strict";
const calculate = (a, b, operation) => {
  return operation(a, b);
};
// here we are passing an ananymous function as argument inside calculate function
const addition = calculate(2, 3, (num1, num2) => {
  return num1 + num2;
});

const subtract = calculate(5, 1, (a, b) => {
  return a - b;
});
console.log(addition);
console.log(subtract);
