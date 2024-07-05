"use strict";

let inputBar = document.getElementById("inputBar");
let addButton = document.getElementById("addButton");
let deleteButton = document.getElementById("deleteButton");
let ul = document.getElementById("list");
let button49 = document.createElement("button49");

//add to do.
function addToDo(e) {
  event.preventDefault();

  let value = inputBar.value;
  if (value) {
    let li = document.createElement("li");
    li.textContent = value;

    deleteLi(li);

    ul.appendChild(li);
    inputBar.value = "";
  }
}

function deleteToDo(e) {
  e.preventDefault();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

function deleteLi(li) {
  // Create the delete button
  const button49 = document.createElement("button");
  button49.textContent = "Delete";
  button49.id = "button49";

  button49.addEventListener("click", () => {
    ul.removeChild(li);
  });

  li.appendChild(button49);
}

button49.addEventListener("click", deleteLi);

deleteButton.addEventListener("click", deleteToDo);

addButton.addEventListener("click", addToDo);

inputBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addToDo(e);
  }
});
