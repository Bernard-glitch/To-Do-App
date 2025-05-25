const API_URL = 'https://jsonplaceholder.typicode.com/todos';
const todoList = document.getElementById('todoList');
const userFilter = document.getElementById('userFilter');
let todos = [];

// Render unique user IDs in dropdown
function renderDropdown(data) {
  const userIds = [...new Set(data.map(todo => todo.userId))];
  userIds.forEach(id => {
    const option = document.createElement('option');
    option.value = id;
    option.textContent = `User ID: ${id}`;
    userFilter.appendChild(option);
  });
}

// Render todos based on filter
function renderTodos(data) {
  todoList.innerHTML = '';
  data.forEach(todo => {
    const div = document.createElement('div');
    div.className = 'todo-item';
    div.textContent = `[${todo.userId}]: ${todo.title}`;
    todoList.appendChild(div);
  });
}

// Handle dropdown filter
userFilter.addEventListener('change', () => {
  const selected = userFilter.value;
  if (selected === 'all') {
    renderTodos(todos);
  } else {
    const filtered = todos.filter(todo => todo.userId === parseInt(selected));
    renderTodos(filtered);
  }
});
