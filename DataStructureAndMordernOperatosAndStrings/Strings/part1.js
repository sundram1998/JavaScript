let airline = "Indian Indigo Airline";
let plane = "boing 377";
console.log(airline[7]);
console.log(airline.slice(4, airline.length));
console.log(airline.slice(-1));

// UpperCase
console.log(airline.toLocaleUpperCase());

//tolowerCase
console.log(airline.toLocaleLowerCase().trim());

//Replacing
const priceGB = "288,97$";
const priceDoller = priceGB.replace("288", "999");
console.log(priceDoller);

const announcement = "All passenger please come at boarding gate-4 at 11 AM";
console.log(announcement.replaceAll("gate", "door"));
console.log(announcement);

const plane2 = "Airbus 320Aneo";
console.log(plane2.includes("neo")); //Ture
console.log(plane2.includes("no")); //false

if (plane.startsWith("boing1") | plane.endsWith("377")) {
  console.log("Good Morning Prerna Darling");
}

// console.log(x);
// let x = 10;
