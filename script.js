
//------------------------------------------------<SOURCE>-----------------------------------------------------

const url = 'https://jsonplaceholder.typicode.com/todos';
const list = document.getElementById('todoList');
const dropdown = document.getElementById('userSelect');
const button = document.getElementById('toggleDropdown');
let todos = []; // to store the data from the API.

// ---------------------------------------Grabbing the data from API-------------------------------------------

fetch(url) // It sends the request to the API to get a list of items.
  .then(response => response.json())
  .then(data => {
    todos = data; // saves the data into the todos variable.
    showTodos(todos); // display all the variable items on the screen.
    addUserOptions(todos); // This function fills the dropdown menu with unique user IDs from the to-do list.
  });

//--------------------------------------------To show data items-----------------------------------------------

function showTodos(items) { // It creates a function that takes the item and put them into a list.
  list.innerHTML = '';// clears everything shown in the list when we start each time.
  for (let todo of items) { // goes through everything by loop one by one.
    let div = document.createElement('div'); //create a box to hold the content on the page.
    div.textContent = todo.userId + ': ' + todo.title; // It combines the userId and title of the to-do into one line.
    list.appendChild(div); // repeats every items in the list.
  }
}

// ----------------------------------Adding unique user IDs to filter------------------------------------------
                                           //<STILL WIP>//

function addUserOptions(items) { //First I create a function that shows the items in the list.
  let ids = []; // Then I create a empty array to keep track of the users that are already added.
  for (let todo of items) { // It goes through each item one by one.
    if (!ids.includes(todo.userId)) {
      ids.push(todo.userId);// To let the computer know that it is already added.
      let option = document.createElement('option'); // It create a new element.
      option.value = todo.userId;
      option.textContent = 'User ID: ' + todo.userId;
      dropdown.appendChild(option);
    }
  }
}

// --------------------------------------A button that filters the data----------------------------------------

button.onclick = function () { 
  dropdown.style.display = dropdown.style.display === 'none' ? 'inline' : 'none';// all i know that it is a ternary operator. I can't explain.
  // to control whether the list is hidden or not.
};

//-----------------------------------Filter the data when a user ID is selected--------------------------------

dropdown.onchange = function () { // when the item is selected, the dropdown changes.
  if (dropdown.value === 'all') {
    showTodos(todos);
  } else {
    let filtered = todos.filter(todo => todo.userId == dropdown.value); 
    showTodos(filtered);
  }
};