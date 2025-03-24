/*-----------------------------------------------------------------------------
Challenge: 05-computeRemainder
Difficulty: Basic
Prompt:
- Write a function named computeRemainder that accepts two numeric arguments
  and returns the remainder of the division of those two numbers.
- The first argument should be the dividend, and the second argument should be
  the divisor.
- If a 0 is passed in as the second argument, you should return JavaScript's
  special numeric value: Infinity.
- For extra fun, complete this challenge without using the modulus (%) operator.
Examples:
computeRemainder(10,2) //=> 0
computeRemainder(4,0) //=> Infinity
computeRemainder(10.5, 3) //=> 1.5
-----------------------------------------------------------------------------*/
// Your solution for 05-computeRemainder here:
// let num1 = 0;
// let num2 = 0;
// let newNum2 = 0;

const computeRemainder = (num1,num2) => {
// Need firstAnswer
// Need to isolate remainder.
// firstAnswer -

        if(num2 === 0){
            let newNum2 = Infinity;
            console.log(newNum2);
            return newNum2;
        } else {
            let firstAnswer = num1%num2;
            console.log(firstAnswer);
            return firstAnswer;
        }

}
computeRemainder(10,2); // computeRemainder(4,0)  /// correct
computeRemainder(4,0)
computeRemainder(10.5, 3) // 1.5