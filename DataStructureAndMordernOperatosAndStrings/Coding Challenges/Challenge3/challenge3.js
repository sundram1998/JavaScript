"use strict";
let game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  scorers: {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2,
  },
};

//Challenge3
let gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);
console.log(typeof gameEvents);

let events = [new Set(gameEvents.values())];
console.log(events);
console.log("Keys values object and entires on object:");
let gameKeys = Object.keys(game);
console.log(gameKeys);
console.log("let gamevalues = Object.values(game):");
let gamevalues = Object.values(game);
console.log(gamevalues);
console.log("let gameEntries = Object.entries(game):;");
let gameEntries = Object.entries(game);
console.log(gameEntries);
console.log("GameEntries Playes: ");
gameEntries = [...game.players];
console.log(gameEntries);

console.log("Keys values object and entires on Map:");
console.log(gameEvents.keys());
console.log(gameEvents.values());

const time = [...gameEvents.keys()];
console.log(time);
