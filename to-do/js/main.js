document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");

  // Create a <ul> inside .container to hold tasks
  const taskList = document.createElement("ul");
  taskList.id = "task-list";
  document.querySelector(".container").appendChild(taskList);

  // Add task function
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return; // ignore empty input

    // Create li
    const li = document.createElement("li");
    li.classList.add("task-item");

    // Task text inside a span
    const span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("task-text");

    // Toggle completed on click
    span.addEventListener("click", () => {
      span.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent span click
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ""; // clear input
  }

  // Event listeners
  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });
});
