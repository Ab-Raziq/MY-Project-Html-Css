function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    const taskText = taskInput.value.trim();
    if (!taskText) return;
  
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;
  
    taskList.appendChild(listItem);
    taskInput.value = '';
  }
  
  document.getElementById('taskList').addEventListener('click', function(e) {
    if (e.target.classList.contains('edit-btn')) {
      const span = e.target.parentElement.querySelector('.task-text');
      const newText = prompt('Edit task:', span.textContent);
      if (newText !== null) span.textContent = newText;
    }
  
    if (e.target.classList.contains('delete-btn')) {
      e.target.parentElement.remove();
    }
  });