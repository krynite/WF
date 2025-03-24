//? - create elements
//* 1. create the element
//* 2. modify the element
//* 3. select the parent of where this element is going to be
//* 4. put the element into the DOM
// console.log("intro to dom");

const h2Element = document.createElement("h2");
h2Element.textContent = "Almost lunch";
console.log(h2Element);

const bodyElement = document.querySelector("body");
const divElement = document.querySelector("div");
divElement.appendChild(h2Element);

// //? - select elements                    -> css selector
const titleElement = document.querySelector("#main-title");
// titleElement.setAttribute("class", "title cool");
titleElement.classList.add("cool");
console.log("h1", titleElement);

//? select multiple -> querySelectorAll
const liElements = document.querySelectorAll("li");
//* nodelist != array
// console.log(liElements[1]);

for (let i = 0; i < liElements.length; i++) {
  const element = liElements[i];
  // console.log(element);
  element.textContent = "Comment " + i;
}
// liElements;

const imgElement = document.querySelector("img");
imgElement.setAttribute("src", "https://picsum.photos/id/237/200/300");
// imgElement.src = "https://picsum.photos/id/78/200/300";

// //? - modify elements
// //* A = B, A <- B
// //* A.B -> A is object, B is property inside A

// // const title = {
// //   textContent: "Learn DOM",
// // };
// titleElement.textContent = "Eat Lunch";
// titleElement.style.textAlign = "center";
// titleElement.style.backgroundColor = "red";
// console.log(titleElement.style);

// const paragraphElement = document.querySelector(".cool");
// console.log(paragraphElement);

liElements.forEach((elements) => {
  elements.style.fontSize = "30px";
});




// paragraphElement.textContent = "Hi";
// // paragraphElement.

//  <table border="1">
//     <tr>
//       <th>Person</th>
//       <th>Age</th>
//     </tr>
//     <tr>
//       <td>Chris</td>
//       <td>38</td>
//     </tr>
//     <tr>
//       <td>Dennis</td>
//       <td>45</td>
//     </tr>
//   </table>

//? How to create HTML purely in JS
//* 1. Mock up the HTML -> let's you see how the final result looks like
//* 2. Start small and built it piece by piece -> hook into DOM to view

const tableElement = document.createElement("table");
tableElement.setAttribute("border", "1");
// console.log(tableElement);

const makeTableHeader = () => {
  const tr = document.createElement("tr");

  const th = document.createElement("th");
  th.textContent = "Person 1";
  tr.append(th);

  const th2 = document.createElement("th");
  th2.textContent = "Age 2";
  tr.append(th2);
  return tr;
};

tableElement.appendChild(makeTableHeader());

divElement.appendChild(tableElement);
