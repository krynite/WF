//* OOP -> Object Oriented Programming
//* FP -> Functional Programming
//? 4 Major Programming Paradiagms
//? Procedural Programming -> 5 basic concepts, if, for, arrays, objects, vars etc

const oldCar = {};
console.log(oldCar);

//* norm to make the class UpperCamelCase -> convention
//? class -> blueprint  / template -> stamp new instances (similar)
class Car {
  constructor() {
    console.log("constructor");
  }

  //? method -> function inside object / class
  drive() {
    console.log("Driving the car");
  }
}

//? object (instance) -> created from Car class
const ford = new Car();
ford.make = "Ford";
console.log(ford);
ford.drive();

const honda = new Car();
honda.make = "Honda";
console.log(honda);
honda.drive();

// //? object -> group related items
// const ford = {
//   make: "Ford",
//   model: "Bronco",
//   color: "orange",

//   drive: () => {
//     console.log(`Driving ${ford.make} ${ford.model} in ${ford.color}`);
//   },
// };
// console.log(ford);
// ford.drive();
