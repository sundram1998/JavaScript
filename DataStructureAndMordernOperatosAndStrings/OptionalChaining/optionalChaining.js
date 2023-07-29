"use strict";
const openingHours = {
  thu: {
    open: 10,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  Sat: {
    open: 0,
    close: 24,
  },
};

// const days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
// console.log(openingHours?.thu?.open);
// //below code will print undefined because monday does not exist
// console.log(openingHours?.monday?.open) ?? "closed";

// for (const day of days) {
//   const open = openingHours[day]?.open || "closed";
//   console.log(`${day} we open at ${open}`);
// }

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }
//PROPERTY KEYS
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day} ,`;
}
console.log(openStr);
//PROPERTY VALUES
const valueProperties = Object.values(openingHours);
console.log(valueProperties);
//PROPERTY ENTRIES(ENTIRE OBJECT)
const entries = Object.entries(openingHours);
console.log(entries);
for (const [keys, { open, close }] of entries) {
  console.log(`On ${keys} we are open at: ${open} and close at ${close}`);
}
