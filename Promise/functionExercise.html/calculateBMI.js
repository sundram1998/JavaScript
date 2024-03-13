"use strict";
const massMark = prompt(`Enter Mark's Mass`);
const heightMark = prompt(`Enter Mark's Hieght`);
const massJohn = prompt(`Enter John's Mass`);
const heightJohn = prompt(`Enter John's Hieght`);
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(`Mark has height ${heightMark} and BMI: ${BMIMark}`);
