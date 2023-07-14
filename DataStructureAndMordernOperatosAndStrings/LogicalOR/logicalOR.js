"use strict";
const rest1 = {
  name: "La Piazza",
  numGuest: 0,
};
const rest2 = {
  name: "Delicioso Italiano",
  owner: "Jabba",
};

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;
//If rest1.numGuest =0 then it will print 10 because 0 is a falsy value
//Or we can write the 11 and 12 line as below //Answers will be same
/*rest1.numGuest ||= 10;
rest2.numGuest ||= 10; //This is called OR assignment operator

console.log(rest1);
console.log(rest2);
*/
//Nullish Assignment Operator
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;
console.log(rest1);
console.log(rest2);
/*output:
{name: 'capri choma', numGuest: 0}
logicalOR.js:25 {name: 'Delicioso Italiano', owner: 'Jabba', numGuest: 10}
output for rest2.numGuest is 10 because it is not defined so it took provided value
*/
