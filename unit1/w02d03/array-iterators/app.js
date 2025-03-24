// console.log("array-i");

//? callback functions -> pass a function as an argument to another function

// const button = document.querySelector("button");
// const handleClick = () => {
//   console.log("click");
// };
// button.addEventListener("click", handleClick);

// const myAddEventListener = (str, callback) => {
//   const event = {};
//callback(event); //? this happens  when you click -> Browser
// };

const numbers = [4, 15, 2, 9];
console.log(numbers);

let total = 0;
for (const num of numbers) {
  console.log("t:" + total);
  total += num;
}
console.log(total);
const reduceCallback = (acc, current) => acc + current; //? line 21

console.log("reduce", numbers.reduce(reduceCallback, 0));

//? how to console.log every number in the array

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);

// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];

//   console.log(element);
// }

// for (const element of numbers) {
//   console.log(element);
// }

// numbers.forEach((element) => console.log(element));
//? create a new array -> [5, 3, 10]

const addOneAnswer = [];

//? write some code
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  // const newItem = element + 1;
  if (element === 2) {
    addOneAnswer.push(element);
  }
}

console.log(addOneAnswer);

//? create a new array -> [16, 4, 81]

// const doubleAnswer = [];

// //? write some code
// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   const newItem = element ** 2;
//   doubleAnswer.push(newItem);
// }

// console.log(doubleAnswer);

console.log("-------");

const addOne = (element, index) => {
  // return element + 1;
  if (index > 1) {
    return element + 10;
  }
  // return element;
};
//? transform -> element is item in numbers
//* what the function returns is what the new array contains
console.log(numbers.map(addOne));
console.log(numbers.map((num) => num ** 2));

//? predicate function that returns boolean T/F
const predicate = (num) => num > 5; //? boolean
console.log(
  "filter",
  numbers.filter((num) => num === 2)
);

console.log("after", numbers);

const myMap = (anArray, callback) => {
  const answer = [];

  for (let i = 0; i < anArray.length; i++) {
    const element = anArray[i];
    const newItem = callback(element, i, anArray);
    answer.push(newItem);
  }
  return answer;
};

const callback = (num) => num ** 2;
console.log("myMap", myMap(numbers, callback));

const myFilter = (anArray, callback) => {
  const answer = [];

  for (let i = 0; i < anArray.length; i++) {
    const element = anArray[i];
    if (callback(element) === true) {
      answer.push(newItem);
    }
  }
  return answer;
};

const cars = [
  { color: "red", make: "BMW", year: 2001 },
  { color: "white", make: "Toyota", year: 2013 },
  { color: "blue", make: "Ford", year: 2014 },
  { color: "white", make: "Tesla", year: 2016 },
];

let whiteCar = null;
//? for loop? -> try as exercise for yourself??
console.log(whiteCar);
