// Exercise 1: Define an empty array

const foods = [];
console.log("ex results",foods);


//Exercise 2: Add strings to the array

foods.push("Pizza","CheeseBurger");
console.log(foods);


//Exercise 3: Insert at the beginning

foods.unshift("Taco");
console.log(foods);


//Exercise 4: Access an array element
/*
1) Retrieve the 'pizza' string from the array based on its position (index) in the array.  
2) Assign it to a variable called `favFood`.*/

favFood = foods[1];
console.log("Fav Food =", favFood);


//Exercise 5: Insert an element between two others
//1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

foods.splice(1,0,"Tofu");
console.log("Exercise 5 Results: ", foods);



//Exercise 6: Replace elements
//1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

foods.splice(2,1,"Sushi", "Cupcake");
console.log("Exercise 6 Results: ", foods);


//Exercise 7: Using the `slice()` method
//1) Use the `slice()` method to create a new array that contains 'sushi' and 'cupcake'.
//2) Assign it to a variable named `yummy`.

const yummy = foods.slice(2,4);
console.log(`Exercise 7 Results`, yummy);
console.log(`Exercise 7 Results (testing)`, foods.slice(2,4));


//Exercise 8: Finding an index
//1) Using the `indexOf()` method, find the index of the string 'tofu' in the  `foods` array. 
//2) Assign it to a variable named `soyIdx`.

const soyIdx = foods.indexOf(`tofu`);
console.log("Exercise 8 Results: ",foods.indexOf(soyIdx))
console.log("Exercise 8 Results (testing): ",foods.indexOf(`Tofu`))


//Exercise 9: Joining elements
//1) Use the `join()` method to concatenate the strings in the `foods` array, separated by ' -> '. 
//2) Assign the result to a variable called `allFoods`. 
// Note: The final result should log as:
//'taco -> sushi -> cupcake -> tofu -> cheeseburger'
console.log("Exercise 9 Results: ",foods.join(" -> "));


//Exercise 10: Check for an element
//1) Using the .includes() method, check if the `foods` array contains the string 'soup'.
//2) Assign the result to a variable called `hasSoup``.

const hasSoup = foods.includes(`Soup`);
console.log("Exercise 10 Results: ", hasSoup);


//Exercise 11: Odd numbers from an array
//1) Choose a method to iterate through the `nums` array.
//2) Push each odd number to a new array named `odds`.
//Hint: Initialize the `odds` variable to an empty array before the iteration.

//Testing array.filter() WITH another var "j"
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
for (let i=0; i<i.length; i++){
   let j = nums[i];
   const odds1 = j.filter((num) => num % 2 === 1);
   console.log("Exercise 11 Results(using filter array) : ",odds1);
}






















//!Testing array.filter() WITHOUT another var (DOES NOT WORK!)
for (let i=0; i<i.length; i++){
   const odds3 = nums[i].filter((nums[i]) , nums[i] % 2 === 1);
  console.log("Exercise 11 Results(using filter array) : ",odds3);
}

//Testing array.forEach()
//for (let i=0; i<i.length; i++){
 //  const odds2 = [];
 //  let j = nums[i];
 //  const odds = j.filter((num) => num % 2 === 1);
 //  console.log("Exercise 11 Results(using filter array) : ",odds2);
//}

