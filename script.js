// Get the containers and the reset button
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const resetButton = document.getElementById('resetButton');

// Add event listeners for drag events on the items
const items = document.getElementsByClassName('item');
for (const item of items) {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
}

// Add event listeners for drop events on the second container
container2.addEventListener('dragover', dragOver);
container2.addEventListener('drop', drop);

// Add event listener for the reset button
resetButton.addEventListener('click', reset);

// Drag start event handler
function dragStart(event) {
  // Add 'dragging' class to the item being dragged
  event.target.classList.add('dragging');
}

// Drag end event handler
function dragEnd(event) {
  // Remove 'dragging' class from the item
  event.target.classList.remove('dragging');
}

// Drag over event handler (required to allow dropping)
function dragOver(event) {
  event.preventDefault();
}

// Drop event handler
function drop(event) {
  event.preventDefault();

  // Get the dragged item
  const draggedItem = document.querySelector('.item.dragging');

  // Clone the dragged item and append it to the second container
  const clonedItem = draggedItem.cloneNode(true);
  container2.appendChild(clonedItem);

  // Remove the original item from the first container
  draggedItem.parentNode.removeChild(draggedItem);

  // Display a success message
  const successMessage = document.createElement('p');
  successMessage.classList.add('success-message');
  successMessage.innerText = 'Item dropped successfully!';
  container2.appendChild(successMessage);
}

// Reset the containers to their original state
function reset() {
  // Clear the second container
  container2.innerHTML = '';

  // Append the original items back to the first container
  const originalItems = container1.getElementsByClassName('item');
  for (const item of originalItems) {
    container1.appendChild(item);
  }
}
