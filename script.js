function addItem() {
  const itemInput = document.getElementById('itemInput');
  if (itemInput.value.trim() === '') return;

  const li = document.createElement('li');
  const removeBtn = document.createElement('span');

  const id = Date.now();
  li.id = `item-${id}`;

  const itemText = document.createElement('span');
  itemText.textContent = itemInput.value;
  itemText.classList.add('item-text');

  removeBtn.innerHTML = '×';
  removeBtn.classList.add('remove');

  removeBtn.addEventListener('click', () => {
    removeItem(li.id);
  });

  li.appendChild(itemText);
  li.appendChild(removeBtn);
  itemList.appendChild(li);

  itemInput.value = '';
  updateListNumbers();
}
