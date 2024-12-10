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
const odds= [];
for (let i=0; i<nums.length; i++){
   const inspectNum = nums[i];
   if(inspectNum % 2 ===1){
    odds = odds.push(nums[i]);
   }
   
   console.log("Exercise 11 Results(using filter array) : ",odds);
}



//Exercise 13: Retrieve the Last Array

//1) Assign the last nested array in the `numArrays` below to a variable named `numList`. As you do this, also fulfill these goals:
//
//   - Assume you don't know how many nested arrays `numArrays` contains.
//   - Do not alter the original `numArrays` array.

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
console.log("Testing Array :",numArrays[3][2]);  // ANSWER IS 90. LAST ROW LAST COL [ROWS][COL]
console.log("Testing Array ROW length:",numArrays.length);

const i = numArrays.length-1;
//const numList = numArrays[i];
numList = numArrays[numArrays.length-1];
console.log(`Exercise 13 Results: `, numList)



//Exercise 14: Accessing within nested arrays
//1) Retrieve the number `66` from the `numArrays` array. As part of this process
//   do not alter the original `numArrays` array.
//2) Assign it to a variable called `num`.

const num = numArrays[2][1];
console.log('Exercise 14 result: ', num);


//Exercise 15: Nested array sum
//1) Use nested loops or `forEach()` methods to sum up all numbers within 
//   `numArrays` nested arrays.   
//2) Assign the sum to a variable called `total`.
//Hint: Be sure to declare and initialize the total variable before the iterations.

//const numArrays = [
//	[100, 5, 23],
//	[15, 21, 72, 9],
//	[45, 66],
//	[7, 81, 90]
//];
//console.log("TESTING COL", numArrays[0].length);

for(let i=0;i<numArrays.length;i++){
   let total = 0;
   let subTotal = 0;
   const rowNum = i+1;
   for(j=0;j<numArrays[i].length; j++){
      const addNum = numArrays[i][j];
      subTotal = subTotal+addNum;
   }
   total = total + subTotal;
console.log(`Exercise 15 Results for Row `,rowNum,` is `,  total)
}




//Exercise 12: FizzBuzz with arrays
//1) Choose a method to iterate through the `nums` array. 
//2. As you loop, sort the numbers into new arrays based on the following rules:
//   - Push any number evenly divisible by 3 to an array called `fizz`.
//   - Push any number evenly divisible by 5 to an array called `buzz`.
//   - Push any number that is evenly divisible by 3 and 5 to an array called `fizzbuzz`.
//  Note: A single number may meet more than one of the above rules. If it does,
//         it should be placed in multiple arrays. For example, the number `15`
//         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.
// const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];



/*
const fizz = [];
const buzz = [];

for (let i = 0; i<nums.length ; i++){
   inspectNum = nums[i];
   if (inspectNum)
}
*/


