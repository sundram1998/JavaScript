"use strict";
const age = function (dob) {
  const currentYear = 2025;
  return currentYear - dob;
};

const person = (age) => {
  if (age > 18) {
    console.log("You are an adult");
  }
};

person(1998);
