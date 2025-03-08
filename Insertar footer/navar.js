function addMenuItem() {
    const menu = document.getElementById('menu');
    const newItem = document.createElement('li');
    newItem.innerHTML = '<a href="#new">Nuevo Item</a>';
    menu.appendChild(newItem);
}