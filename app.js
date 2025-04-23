function addTask() {
    let taskInput = document.getElementById("task");
    let taskValue = taskInput.value.trim();
    if (taskValue === "") return;
    
    let li = document.createElement("li");
    li.innerHTML = taskValue + ' <button onclick="this.parentElement.remove()">X</button>';
    document.getElementById("taskList").appendChild(li);
    
    taskInput.value = "";
}

// console.log("To-Do App Started, bro!,");
// console.log(" Shruthi To-Do App Started, bro!,");
// console.log(" Shruthi To-Do App Started, 1.0 bro!,");