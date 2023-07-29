"use strict";
const game = {
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
// const player1 = [];
// console.log(game.players[0]);
// game.players[0].forEach((element) => {
//   player1.push(element);
// });
// console.log(player1);
// const player2 = [];
// console.log(game.players[1]);
// game.players[1].forEach((element) => {
//   player2.push(element);
// });
// console.log(player2);
// const goalKeeper1 = player1[0];
// console.log(goalKeeper1);
// const goalKeeper2 = player2[0];
// console.log(goalKeeper2);

// const fieldPlayers1 = [];
// for (let i = 1; i < player1.length; i++) {
//   fieldPlayers1.push(player1[i]);
// }
// console.log(`fieldPlayers1 : ${fieldPlayers1}`, fieldPlayers1);
// const fieldPlayers2 = [];
// for (let i = 1; i < player2.length; i++) {
//   fieldPlayers2.push(player2[i]);
// }
// console.log(`fieldPlayers2 : ${fieldPlayers2}`, fieldPlayers2);

// const allPlayers = game.players[0] + game.players[1];
// console.log([allPlayers]);

//Coding Challenge -2
for (const [i, players] of game.scored.entries()) {
  console.log(i, players);
  console.log(`Goal ${i + 1}: ${players}`);
}

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

const test = Object.entries(game);
console.log(test);

for (const [i, players] of game.players.entries()) {
  console.log(i, players);
  console.log(`Team ${i + 1}: ${players}`);
}
