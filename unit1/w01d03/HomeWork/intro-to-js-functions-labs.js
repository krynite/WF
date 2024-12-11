// Exercise 1: maxOfTwoNumbers(
// In this exercise, create a function named maxOfTwoNumbers. 
// It should take two numbers as inputs and return the larger number. 
// If they're equal, return either one.

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));



// Exercise 2: isAdult()
// Write a function named isAdult. It should take an age (number) 
// and return 'Adult' if the age is 18 or over and 'Minor' otherwise.
// Example: isAdult(21) should return 'Adult'.

function isAdult(number){
    
    if (number >= 18){
        const age = "Adult";
        return age;
    }else {
        return age;    }

}
console.log('Exercise 2 Result:', isAdult(21));




// Exercise 3: isCharAVowel()
// Write a function named isCharAVowel that takes a single character as 
// an argument. It should return true if the character is a vowel and 
// false otherwise. For the purposes of this exercise, the character 
// y should not be considered a vowel.
// Example: isCharAVowel('a') should return true.

function isCharAVowel(char){
    let inspectChar = "";
    if (char === "a" || char === "A" ||
        char === "e" || char === "E" ||
        char === "i" || char === "I" ||
        char === "o" || char === "O" ||
        char === "u" || char === "U"         
    ){
        inspectChar = true;
    }else {
        inspectChar = false;
    }
return inspectChar;
}

console.log('Exercise 3 Result:', isCharAVowel("a"));



// Exercise 4: generateEmail()
// Create a function named generateEmail. It should take two strings: 
// a name and a domain. It should return a simple email address.
// Example: generateEmail('johnsmith', 'example.com') 
// should return 'johnsmith@example.com'.

const generateEmail = (name,domain) =>{
    const email=name+"@"+domain;
    return email;
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

// or

function generateEmail1(name,domain){ // Testing old method of writing function VS new method of writing functions
    const email=name+"@"+domain;
    return email;
}
console.log('Exercise 4a Result:', generateEmail1("johnsmith", "example.com"));


// Exercise 5: greetUser()
// Define a function called greetUser. It should take a name and a 
// time of day (morning, afternoon, evening) and return a personalized 
// greeting.
// Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

const greetUser = (name,time) => {
  const greetings = `Good ${time} ${name}!`;
    return greetings;
};

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


// Exercise 6: maxOfThree()
// Define a function, maxOfThree. It should accept three numbers 
// and return the largest among them.
// Example: maxOfThree(17, 4, 9) should return 17.

const maxOfThree = (num1,num2,num3) => {
let ans = 0;
const inputNum = [num1,num2,num3];
    for(i=0; i<inputNum.length; i++){
        if(ans < inputNum[i]){
            ans = inputNum[i];
        }
    }
return ans;
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));



// Exercise 7: calculateTip()
// Create a function called calculateTip. It should take two arguments: 
// the bill amount and the tip percentage (as a whole number). 
// The function should return the amount of the tip.
// Example: calculateTip(50, 20) should return 10.

const calculateTip = (bill,tip) => {
    const totalTip = ((100+tip)/100)*bill;
    return totalTip;
};
console.log('Exercise 7 Result:', calculateTip(50, 20));



// Exercise 8: convertTemperature()
// Write a function named convertTemperature. 
// It takes two arguments: a temperature and a string representing the 
// scale ('C' for Celsius, 'F' for Fahrenheit). 
// Convert the temperature to the other scale.
// Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
// Example: convertTemperature(32, 'F') should return 0 (Celsius).

const convertTemperature = (temp,str) => {
    let convertedTemp = ``;
    if (str === `C`){
        convertedTemp = temp + 57.6;       
    } else if (str === `F`){
        convertedTemp = temp - 32;
    }
 return convertedTemp;
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));






// Exercise 9: basicCalculator()

// Create a function named basicCalculator. 
// It should take three arguments: two numbers and a string representing 
// an operation ('add', 'subtract', 'multiply', 'divide'). 
// Perform the provided operation on the two numbers. 
// In operations where the order of numbers is important, 
// treat the first parameter as the first operand and the 
// second parameter as the second operand.
// Example: basicCalculator(10, 5, 'subtract') should return 5.


const basicCalculator = (num1,num2,str) => {
    let ans = '';
        switch (str){
            case `add`:
            ans = num1+num2;
            break;
            case `subtract`:
            ans = num1-num2;
            break;
            case `multiply`:
            ans = num1*num2;
             break;
            case `divide`:
            ans = num1/num2;
            break;


        }

return ans;

}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));