/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

const app = {
  todos: ["Eat Dinner", "Pass Project 3"],
  completed: ["Learn JS", "Pass Project (Target)", "Another Item"],
};

/*------------------------ Cached Element References ------------------------*/
const todoListElement = document.getElementById("todo-list");
const completedListElement = document.getElementById("completed-list");
const titleInputElement = document.getElementById("title-input");
/*-----------------------------Render Functions --------------------------------*/

const clearElementContents = (element) => (element.innerHTML = "");

//? render() -> takes the model and shows it in the DOM

const renderTodoCount = () => {
  document.getElementById("todo-count").textContent = app.todos.length;
};

const renderTodos = () => {
  clearElementContents(todoListElement);
  for (let i = 0; i < app.todos.length; i++) {
    const item = app.todos[i];

    const liElement = document.createElement("li");
    liElement.textContent = item;

    liElement.addEventListener("click", () => {
      app.todos.splice(i, 1);
      app.completed.unshift(item);
      render();
    });

    todoListElement.appendChild(liElement);
  }
};

const renderCompleted = () => {
  clearElementContents(completedListElement);
  for (const item of app.completed) {
    const liElement = document.createElement("li");
    liElement.textContent = item;

    completedListElement.appendChild(liElement);
  }
};

const render = () => {
  renderTodos();
  renderCompleted();
  renderTodoCount();
};

/*----------------------------- Event Listeners -----------------------------*/
document.getElementById("create-button").addEventListener("click", () => {
  const title = titleInputElement.value;
  app.todos.push(title);
  render();
});

render();
