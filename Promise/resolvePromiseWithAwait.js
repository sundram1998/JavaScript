"use strict";
function calculate(a, b) {
  setTimeout(() => {
    return new Promise((resolve, reject) => {
      const sum = a + b;
      resolve(a + b);
    });
  }, 2000);
}
console.log(calculate(2, 3));

async function promiseDemo() {
  const sum = await calculate(2, 3);
  console.log("Here is your sum", sum);
}
promiseDemo();
