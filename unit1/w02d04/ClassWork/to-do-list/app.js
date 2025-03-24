/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const todoListElement = document.getElementById("todo-list");
const completedListElement = document.getElementById("completed-list");
const titleInputElement = document.getElementById("title-input");
/*-------------------------------- Functions --------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
const handleCreate = () => {
  const liElement = document.createElement("li");
  liElement.textContent = titleInputElement.value;
  todoListElement.appendChild(liElement);
  titleInputElement.value = "";

  const itemElement = liElement;
  itemElement.addEventListener("click", () => {
    // console.log("click");
    //? shift this thing to completed list

    //? make this thing disappear
    itemElement.parentNode.removeChild(itemElement);
    // itemElement.style.display = "none";

    //? make new thing that looks the same appear on the completed list
    const liElement = document.createElement("li");
    liElement.textContent = itemElement.textContent;
    completedListElement.appendChild(liElement);
  });
};

// const itemElement = document.getElementById("item2");
// itemElement.addEventListener("click", () => {
//   // console.log("click");
//   //? shift this thing to completed list

//   //? make this thing disappear
//   itemElement.parentNode.removeChild(itemElement);
//   // itemElement.style.display = "none";

//   //? make new thing that looks the same appear on the completed list
//   const liElement = document.createElement("li");
//   liElement.textContent = itemElement.textContent;
//   completedListElement.appendChild(liElement);
// });

// todoListElement.addEventListener("click", () => {});

document
  .getElementById("create-button")
  .addEventListener("click", handleCreate);

// const node = document.getElementById("child");
// if (node.parentNode) {
//   node.parentNode.removeChild(node);
// }
