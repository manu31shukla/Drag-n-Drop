// Get the containers and the reset button
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const resetButton = document.getElementById('resetButton');

// Add event listeners for drag events on the items
const items = document.getElementsByClassName('item');
for (const item of items) {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
}

// Drag and drop event handlers
let draggedItem = null;

function dragStart(event) {
  draggedItem = this;
  event.dataTransfer.setData('text/plain', '');
  event.dataTransfer.effectAllowed = 'move';
  this.classList.add('dragging');
}

function dragEnd(event) {
  draggedItem = null;
  this.classList.remove('dragging');
}

container2.addEventListener('dragover', dragOver);
container2.addEventListener('dragenter', dragEnter);
container2.addEventListener('dragleave', dragLeave);
container2.addEventListener('drop', drop);

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.preventDefault();
  this.classList.add('drag-over');
}

function dragLeave() {
  this.classList.remove('drag-over');
}

function drop(event) {
  event.preventDefault();
  const droppedItem = draggedItem;
  this.appendChild(droppedItem);
  this.classList.remove('drag-over');
  displaySuccessMessage();
}

// Reset button event handler
function reset() {
  while (container2.firstChild) {
    container1.appendChild(container2.firstChild);
  }
  hideSuccessMessage();
}

function hideSuccessMessage() {
  const successMessage = document.querySelector('.success-message');
  if (successMessage) {
    successMessage.remove();
  }
}


// Success message functions
function displaySuccessMessage() {
  const successMessage = document.createElement('p');
  successMessage.textContent = 'Item dropped successfully!';
  successMessage.classList.add('success-message'); // Add the class
  container2.appendChild(successMessage);
}

