"use strict";
let str = "banana";
let rev = "";
for (let i = str.length - 1; i > 0; i++) {
  rev = rev + str.charAt(i);
}
console.log(str);
console.log(rev);
