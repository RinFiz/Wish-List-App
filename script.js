function addItem() {
  if (itemInput.value.trim() === '') return;

  const li = document.createElement('li');
  const removeBtn = document.createElement('span');

  const id = Date.now();
  li.id = `item-${id}`;

  li.innerText = `${itemList.childElementCount + 1}. ${itemInput.value}`;
  removeBtn.innerHTML = '×';
  removeBtn.classList.add('remove');

  removeBtn.addEventListener('click', () => {
    removeItem(li.id);
  });

  li.appendChild(removeBtn);
  itemList.appendChild(li);

  itemInput.value = '';
  updateListNumbers();
}

function removeItem(itemId) {
  const item = document.getElementById(itemId);
  item.parentNode.removeChild(item);
  updateListNumbers();
}

function updateListNumbers() {
  const items = itemList.children;
  for (let i = 0; i < items.length; i++) {
    items[i].firstChild.textContent = `${i + 1}. `;
  }
}
