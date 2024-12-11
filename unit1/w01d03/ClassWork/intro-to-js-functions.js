//console.log("Hello for functions");
function sayHello(){
console.log('Say hello via function')
}


// const test = "Testing";
// if(test === "Testing"){
//     console.log("Test to see if statement works")
// }


// PARAMETER AND ARGUMENTS

function planetHasWater(planet){
if (planet === "Mars" || planet === "Earth"){
    console.log(true);
} else {
    console.log(false);

}
}

planetHasWater('Earth');   // should print true
planetHasWater('Venus');   // should print false
planetHasWater('Mars');    // should print true
planetHasWater('Jupiter'); // should print false


// RETURNS STATEMENTS (end of each function is a natural return. but return can be used earlier to return earlier than running the full function. AKA stop the function and return a fixed value.)

function computeArea(width,height){

    const areaOfRectangle = width*height;

    //return console.log("The area of a rectangle with a width of " + width + " and a height of " + height + " is "+ areaOfRectangle+" square unit");
    //return ("The area of a rectangle with a width of " + width + " and a height of " + height + " is "+ areaOfRectangle+" square unit");
    return ("The area of a rectangle with a width of " + width + " and a height of " + height + " is "+ areaOfRectangle+" square unit"); 
    //use ${}?
}

console.log(computeArea(5,25));