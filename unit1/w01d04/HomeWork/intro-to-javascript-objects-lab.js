const pokemon = require('./data.js');

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}
// console.dir(pokemon, { maxArrayLength: null })
// console.log(pokemon, { maxArrayLength: null })


//console.log(game)

// Exercise 3
// 1. Add a new property to the `game` object. Let's call it "difficulty".
// 2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?
//console.log(game.gyms[1]) testing // results == { location: 'Cerulean City', completed: false, difficulty: 2 }

game.difficulty =                 //[`Easy`,`Normal`,`Hard`] 
{
  easy: "Easy",
  normal: "Normal",
  hard: "Hard"
}
console.log("Selected game difficulty: ",game.difficulty.easy)



// Exercise 4
// 1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
// 2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?

// Find all pokemon that is true for starter.
//let numOfStarterPokemon
let starterPokemons = ``;
for (let i = 0; i < pokemon.length; i++) {    //For loop to iterate and see all available starter Pokemon
  if (pokemon[i].starter === true){           //To see all available starter Pokemon
    starterPokemons = pokemon[i];
    //console.log("See all starter Pokemon ",starterPokemons);
  }
}
console.log("Selected Pokemon: ",pokemon[0].name)   //Selected Bulbasaur

game.party.push(pokemon[0].name)
console.log("Ex4 : First Pokemon in Party: ",game.party[0])






// Exercise 5
// 1. Choose three more Pokémon from the `pokemon` array and add them to your party.
// 2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?

game.party.push(pokemon[3].name);            // Selected Charmander
game.party.push(pokemon[6].name);            // Selected Squirtle

console.log("Ex5 : New Current Party: ",game.party);






// Exercise 6
// 1. Set the `completed` property to true for gyms with a difficulty below 3.
// 2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


for (let i = 0; i < game.gyms.length; i++) {
    if(game.gyms[i].difficulty < 3){
      game.gyms[i].completed = true;
      
    };
  
};
console.log("Ex6 : Show Gym Completion Status: ", game.gyms);







// Exercise 7
// 1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
// 2. How would you replace the current starter Pokémon in your party with its evolved form?

// Hint: 
//   - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
//   - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
//   - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
//   - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

// More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 

game.party.splice(0,3,pokemon[2].name,pokemon[5].name,pokemon[8].name);
console.log("Ex7 : New Evolved Pokemon Party", game.party);




// Exercise 8
// 1. Print the name of each Pokémon in your party.
// 2. Consider using a loop or an array method to access each Pokémon's name.


console.log("Ex8 : New Evolved Pokemon Party", game.party);



// Exercise 9
// 1. Can you print out all the starter Pokémon from the `pokemon` array?
// 2. Think about how you can identify a starter Pokémon and then log their names.

let listStarterPokemonsNAmes = ``;
let inlineStarterPokemons = [];
for (let i = 0; i < pokemon.length; i++) {    //For loop to iterate and see all available starter Pokemon
  if (pokemon[i].starter === true){           //To see all available starter Pokemon
    listStarterPokemonsNAmes = pokemon[i].name;
    inlineStarterPokemons.push(pokemon[i].name);
    console.log(`Ex9 : List All Starter Pokemon: `,listStarterPokemonsNAmes)
  }
}
console.log(`Ex9a :Inline Starter Pokemon Names: `, inlineStarterPokemons)    //To show the names in an a line/array.



// Exercise 10
// Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
//   - Accept an object as a parameter called `pokemonObj`
//   - Add the `pokemonObj` to the `game.party` array.
//   - not return anything

// After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.





// Exercise 11
// 1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
// 2. How will you find and update the quantity of pokeballs in the `game.items` array?

// Tips:
// For this exercise, it's okay to have a negative number of pokeballs.
// After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
// Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.




// Exercise 12
// 1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
//  (change the value of `complete` in the qualifying objects from false to true).




// Exercise 13
// 1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
// 2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

// This method should:
//   - Not accept any arguments.
//   - Initially create a constant `gymTally`, which is an object that has two 
//     properties: `completed` and `incomplete`, both of which are initially set to 0.
//   - Iterate through the objects in the `game.gyms` array and update the 
//     properties on `gymTally` as follows: 
//     - `completed` should count how many gyms in the array have a value of `true` 
//       for their `completed` property. 
//     - `incomplete` should count how many gyms in the array have a value of 
//       `false` for their `completed` property.
//   - Log the value of `gymTally`.
//   - The method should not return anything.

// For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.




// Exercise 14
// 1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

// This method should:
//   - Not accept any arguments.
//   - Count the number of Pokemon in the party.
//   - return the found number of Pokemon in the party.





//   Exercise 15
// 1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
// (change the value of `complete` in the qualifying objects from false to true).





// Exercise 16
// 1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.