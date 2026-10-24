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
    const li = document.createElement("li");
    li.textContent = taskName;

// Create a Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

// Delete the task when the button is clicked
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

// Add the button to the task
    li.appendChild(deleteBtn);

// Display the task
    taskList.appendChild(li);

    // Step 5: Clear the input box
    taskInput.value = "";
}

// Step 6: Run the function when the button is clicked
addTaskBtn.addEventListener("click", addTask);