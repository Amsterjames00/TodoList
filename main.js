//Declaration of the input-box and task-list in the todo.
const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

//This addTodo function when the user write something in the todo.
function addTodo() {
    if (inputBox.value === '') {
        alert("Write something in the todo....");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; 
    saveTodo();
}
//This addEventListener when the user click the checked or unchecked icon in the todo.
taskList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTodo();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTodo();    
    }
}, false);

//This function the todo save in the LocalStorage.
function saveTodo() {
    localStorage.setItem("data", taskList.innerHTML);
}
//This function still display when you refresh the browser.
function showTodo() {
    taskList.innerHTML = localStorage.getItem("data");
}
showTodo();