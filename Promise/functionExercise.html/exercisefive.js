"use strict";
const calcAverage = (a, b, c) => (a + b + c) / 3;
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

console.log(`avgKoalas has average of ${scoreKoalas}`);
console.log(`scoreDolphins has average of ${scoreDolphins}`);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`avgDolphins win by ${avgDolphins} vs ${avgKoalas}`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`avgDolphins win by${avgKoalas} vs ${avgDolphins}`);
  } else {
    console.log("No one wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);
