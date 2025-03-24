/*-----------------------------------------------------------------------------
Challenge: 06-range
Difficulty: Basic
Prompt:
- Write a function called range that accepts two integers as arguments and 
  returns an array of integers starting with the first argument up to one 
  less than the second argument.
- The range function must be called with the first argument less than or equal 
  to the second argument; otherwise, return the string "First argument must be 
  less than second".
Examples:
range(1,4) //=> [1,2,3]
range(-2, 3) //=> [-2,-1,0,1,2]
range(1,1) //=> []
range(5,2) //=> "First argument must be less than second"
-----------------------------------------------------------------------------*/
// Your solution for 06-range here:
// console.log("Test dailies");
  let showRange = [];
  let lowerNum = 0;
  let higherNum = 0;

const range = (num1,num2) => {
    if (num1===num2){
        let zeroSum = [];
        return zeroSum;
    } else if (num1<num2){
    lowerNum = num1;
    higherNum = num2;
  } else {
    lowerNum = num2;
    higherNum = num1;
  }

for (let i = lowerNum ; i < higherNum ; i++ ){
    showRange.push(i);
    console.log(showRange);
}
}

range(-10,-10);