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
1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  
2) Assign it to a variable called `favFood`.*/

favFood = foods[1];
console.log("Fav Food =", favFood);


//Exercise 5: Insert an element between two others
//1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.


favFood.splice(1,0,"Tofu");
console.log("Fav Food =", favFood);
