function updateListNumbers() {
  const items = itemList.children;
  for (let i = 0; i < items.length; i++) {
    const itemText = items[i].querySelector('.item-text');
    itemText.textContent = `${i + 1}. ${itemText.textContent.substring(itemText.textContent.indexOf('.') + 2)}`;
  }
}
