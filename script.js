// script.js
// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array calle
// TODO: Call the render function to update the table with the new tasks.
// Section 2: App State Variables
let tasks = [];
// Section 3: Cached Element References
const taskForm = document.getElementById('taskForm');
const taskTable = document.getElementById('taskTable');
console.log('taskForm:', taskForm);
console.log('taskTable:', taskTable);

// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();
    // TODO: Get form input values
    const taskName = document.getElementById('taskName').value.trim();
    const taskDescription = document.getElementById('taskDescription').value.trim();
    const taskDeadline = document.getElementById('taskDeadline').value.trim();
    // TODO: Validate input fields
    if (!taskName || !taskDeadline) { // Checking if either task name or deadline is not filled out
        alert('Task name and deadline are required!'); // Displaying an alert message to the user
        return; 
    }
    // TODO: Update the tasks array
    tasks.push({
        id: tasks.length + 1, // Assign a simple incremental ID (consider using a more robust approach for real applications)
        name: taskName,
        description: taskDescription,
        deadline: taskDeadline,
        completed: false // New tasks are not completed by default
    });
    render();
}
// Function to render tasks in the table
function render() {
    // TODO: Use array methods to create a new table row of data for each item in the arr
}
// Function to initialize the table
function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
}
