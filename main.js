document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById("taskList");
    const addTaskButton = document.getElementById("addTask");
    const newTaskInput = document.getElementById("newTask");
  
    addTaskButton.addEventListener("click", function() {
      const taskText = newTaskInput.value.trim();
      if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
          <span class="task">${taskText}</span>
          <span class="delete-button">X</span>
        `;
        taskList.appendChild(taskItem);
        newTaskInput.value = "";
       
        const deleteButton = taskItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", function() {
          taskList.removeChild(taskItem);
        });
      }
    });
  });

  