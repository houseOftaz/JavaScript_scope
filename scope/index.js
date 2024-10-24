// global block-scoped variable
const warriors = [
  {
    name: "Jujin Take",
    type: "Ninja",
    weapon: "Shuriken",
    agility: 79,
  },
  {
    name: "Boku Sota",
    type: "Samurai",
    weapon: "Katana",
    agility: 60,
  },
  {
    name: "Björk",
    type: "Viking",
    weapon: "Long Sword",
    agility: 82,
  },
];

const screamWarriors = () => {
  // global variable warriors available
  console.log(warriors, this);

  warriors.map((warrior) => {
    if (warrior.agility === 60) {
      // block-scoped agility
      let agility = warrior.agility;
      console.log(
        `${warrior.name}, who is a ${warrior.type}, has an agility of ${agility}`
      );
    }
    // block-scoped agility isn't available
  });
};

screamWarriors();

/* 
_________________
Example 3
_________________

let warrior1 = "Ninja";
const warrior2 = "Viking";
console.log("1:", warrior1, warrior2);

// this will return an error
warrior1 = "Samurai";
console.log("2:", warrior1);

const screamWarrior = () => {
  let warrior4 = "Sniper";
  if (warrior2 === "Viking") {
    let warrior3 = "Soldier";
    console.log(`Our warriors are ${warrior1}, ${warrior2} and ${warrior3}`);
  }
  console.log("3:", warrior4);
};

screamWarrior();
// console.log("4:", warrior3);

_________________
Exercise 2
_________________

// global variable
var nbrOfNinja = 45;

function army() {
  // local variables
  let nbrOfSamurai = 23;
  let totalOfWarrior = nbrOfNinja * nbrOfSamurai;
  return `My army have ${totalOfWarrior} warriors.`;
}

console.log(army());

_________________
Example 2
_________________

const screamWarriors = () => {
  var warrior1 = "Ninja"; // those are local variables
  var warrior2 = "Samurai";

  return `Our warriors are ${warrior1} and ${warrior2}`;
};

const screamWarriors2 = () => {
  var warrior1 = "Viking"; // those are local variables
  var warrior2 = "Soldier";

  return `Our warriors are ${warrior1} and ${warrior2}`;
};

console.log(screamWarriors(), screamWarriors2());

// error because the scope of warrior1 is local
// console.log(warrior1);

_________________
/* Exercise 1
_________________
"use strict";

// array of warriors globally scoped
const warriors = [
  {
    name: "Jujin Take",
    type: "Ninja",
    weapon: "Shuriken",
    agility: 79,
  },
  {
    name: "Boku Sota",
    type: "Samurai",
    weapon: "Katana",
    agility: 100,
  },
  {
    name: "Björk",
    type: "Viking",
    weapon: "Long Sword",
    agility: 69,
  },
];

// function that returns warriors globally scoped
const screamWarriors = () => {
  return console.log(warriors);
};

// no issues running screamWarriors function
screamWarriors();

_________________
Example 1
_________________

const warrior = {
  name: "Jujin Take",
  type: "Ninja",
  weapon: "Shuriken",
  agility: 79,
}; // this is globally scoped

// globally scoped
const screamWarrior = () => {
  // locally scoped
  let warrior2 = "Samurai";

  warrior3 = "Viking";
  return {
    shootWarrior: () => {
      return console.log(warrior, warrior2);
    },
  };
};

const newWarrior = screamWarrior();

newWarrior.shootWarrior();

console.log(warrior, warrior3);
*/
