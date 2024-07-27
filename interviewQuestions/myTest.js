"use strict";
function isPal(str) {
  let rev = str.split("").reverse().join("");
  return str === rev;
}
// console.log(isPal("nitina"));

function fibonacci(n) {
  let series = [0, 1];
  for (let i = 2; i <= n; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }
  return series;
}
// console.log(fibonacci(10));

function longestWord(str) {
  let words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
    // console.log(word);
  }
  return longest;
}
// console.log(longestWord("There is a bear in sweaming pool"));

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
// console.log(isAnagram("dabsqwee", "ewqabsds"));

function reverseNum(num) {
  let rev = parseInt(num.toString().split("").reverse().join(""));
  return rev;
}
// console.log(reverseNum(123456));

function findMissingNum(arr, n) {
  let totalSum = (n * (n + 1)) / 2;
  let arrSum = 0;
  for (let i = 0; i < n - 1; i++) {
    arrSum += arr[i];
  }
  return totalSum - arrSum;
}
console.log(findMissingNum([1, 2, 3, 5, 6, 7], 7));
