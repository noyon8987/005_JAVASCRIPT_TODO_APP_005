function generateIncompleteTodo(taskName) {
  const listElement = document.createElement("li");
  const inputElement = document.createElement("input");
  inputElement.setAttribute("type", "checkbox");
  inputElement.onchange = taskComplete;

  const labelElement = document.createElement("label");
  labelElement.innerText = taskName;

  listElement.append(inputElement, labelElement);
  return listElement;
}

function generateCompletedTodo(taskName) {
  const listElement = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.onclick = deleteTask;

  listElement.append(taskName, " ", deleteButton);
  return listElement;
}

const todoForm = document.querySelector("form");
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskInput = document.querySelector("#new-task");
  const taskValue = taskInput.value;

  const listToAddTask = generateIncompleteTodo(taskValue);
  const listContainer = document.getElementById("items");

  listContainer.appendChild(listToAddTask);
  taskInput.value = "";
});

function taskComplete(e) {
  const checkBox = e.target;
  const taskItem = checkBox.parentNode;

  const label = taskItem.querySelector("label");
  const taskName = label.innerText;
  const taskToAdd = generateCompletedTodo(taskName);

  const listContainer = document.querySelector(".complete-lists");
  listContainer.appendChild(taskToAdd);

  taskItem.parentNode.removeChild(taskItem);
}

function deleteTask(e) {
  const taskItem = e.target.parentNode;
  const taskContainer = taskItem.parentNode;

  taskContainer.removeChild(taskItem);
}