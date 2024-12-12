// let mainDish = `outside`;

// const chooseDinner = () => {
//     let isHungry = true;

//     if (isHungry){
//         mainDish = "meatloaf";
//     }else {
//         mainDish = `corn`;
//     }
// }



let x = 2;
let y = 5;

const magic = (x,y) => {
 x=x+10;
 y=y+20;
 let z = x+y;
 console.log(`inside`,x,y,z);
}

console.log(`before`,x,y);
const z = (x,y);
console.log(`after`,x,y,z);