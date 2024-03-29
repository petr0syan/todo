const addTaskButton = document.getElementById("add-task");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

addTaskButton.addEventListener("click", addTodo);

function addTodo() {
    const todoValue = todoInput.value;
    if (todoValue) {
        const todoItem = document.createElement("div");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => toggleTodo(checkbox));
        todoItem.textContent = todoValue;
        todoItem.className = "todo-item";
        todoItem.appendChild(checkbox);
        todoList.appendChild(todoItem);
        todoInput.value = "";
    }
}
function toggleTodo(checkbox) {
    const todoItem = checkbox.parentNode;
    if (checkbox.checked) {
        todoItem.style.textDecoration = "line-through";
    } else {
        todoItem.style.textDecoration = "none";
    }
}
