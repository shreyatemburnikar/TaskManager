// Step 1: Get the HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Step 2: Create a function to add a task
function addTask() {
    const taskName = taskInput.value.trim();

    // Don't allow empty tasks
    if (taskName === "") {
        alert("Please enter a task!");
        return;
    }

    // Step 3: Create a new list item
    const li = document.createElement("li");
    li.textContent = taskName;

    // Step 4: Add the task to the list
    taskList.appendChild(li);

    // Step 5: Clear the input box
    taskInput.value = "";
}

// Step 6: Run the function when the button is clicked
addTaskBtn.addEventListener("click", addTask);