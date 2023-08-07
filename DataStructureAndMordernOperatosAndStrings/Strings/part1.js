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

const announcement = "All passenger please come at boarding gate-4 at 11AM";
console.log(announcement.replace("gate", "door"));
console.log(announcement);
