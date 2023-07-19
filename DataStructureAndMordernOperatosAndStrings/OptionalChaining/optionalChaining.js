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

const days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
console.log(openingHours?.thu?.open);
//below code will print undefined because monday does not exist
console.log(openingHours?.monday?.open) ?? "closed";

for (const day of days) {
  const open = openingHours[day]?.open || "closed";
  console.log(`${day} we open at ${open}`);
}

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

const properties = Object.keys(openingHours);
console.log(properties);
