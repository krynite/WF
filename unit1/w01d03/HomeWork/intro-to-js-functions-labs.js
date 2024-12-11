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


// Exercise 10: calculateGrade()
// Define a function called calculateGrade. 
// It should take a numerical score and return the corresponding letter 
// grade (A, B, C, D, F). 
// For example, 90 and above yields an 'A', 80-89 is a 'B', 
// and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

// Example: calculateGrade(100) should return A.

const calculateGrade = (grade) => {
  let finalGrade = ``;  
    switch (true){
        case (grade>=90):
            finalGrade=`A`;
            break;  
        case (grade<90 && grade>79):
            finalGrade=`B`;
            break;
        case (grade<80 && grade>69):
            finalGrade=`C`;
            break;
        case (grade<70 && grade>59):
            finalGrade=`D`;
            break;
        case (grade<60):
            finalGrade=`F`;
            break;                     
    }
return finalGrade;
}

console.log('Exercise 10 Result:', calculateGrade(85));


// Exercise 11: createUsername()
// Define a function called createUsername. 
// It should take a first name and a last name and return a username. 
// The username should be a combination of the following:
// - The first three letters of the first name.
// - The first three letters of the last name.
// - The total character count of the first and last name combined.

// Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

const createUsername = (str1,str2) => {
    const totalLength = str1.length+str2.length;
//console.log(totalLength);
    const shortNameLength = str1.slice(0,3) + str2.slice(0,3) + totalLength;
// IT WORKS - for last 3 letters of Green as een.
// IT WORKS - shortNameLength = str1.slice(0,3) + str2.slice((str2.length-4),(str2.length)) + totalLength; // results: Sameen13
return shortNameLength;
}
console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));

//createUsername(`wow`,`test`);


// Exercise 12: numArgs()
// Challenge yourself with numArgs. 
// This function should return the count of arguments passed to it when called.

const numArgs = () => {
    return arguments.length-1;                      //! https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/length
                                                    //! This gives the number of inputs into the function. 
}

console.log('Exercise 12 Result:', numArgs(10, 2, 3, 4));

