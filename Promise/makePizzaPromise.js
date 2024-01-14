"use strict";

function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "🍕";
      resolve("Here is your cheese", cheese);
    });
  }, 3000);
}

function getDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + "🥯";
      resolve(dough);
    }, 3000);
  });
}
function makePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + "🍕";
      resolve(pizza);
    }, 3000);
  });
}

getCheese()
  .then((cheese) => {
    console.log(`Here is your ${cheese}`);
    return getDough(cheese);
  })
  .then((dough) => {
    console.log(`Here is your ${dough}`);
    return makePizza(dough);
  })
  .then((pizza) => {
    console.log(`Here is your ${pizza}`);
  });

async function bakePizza() {
  const cheese = await getCheese();
  console.log(`Here is your ${cheese}`);
  const dough = await getDough(cheese);
  console.log(`Here is your ${dough}`);
  const pizza = await makePizza(dough);
  console.log(`Here is your ${pizza}`);
}
bakePizza();
