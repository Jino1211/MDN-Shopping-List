const ul = document.querySelector('ul');
const input= document.querySelector('input');
const addButton = document.querySelector('button');

addButton.onclick = function () {
    let currentValue = input.value;
    input.value = '';

    const list = document.createElement('li');
    const spanList = document.createElement('span');
    const deleteButton = document.createElement('button');

    list.appendChild(spanList);
    list.appendChild(deleteButton);
    spanList.textContent = currentValue;
    deleteButton.textContent = 'Delete';
    ul.appendChild(list);

    deleteButton.onclick = function() {
    ul.removeChild(list);
    }
}
input.focus();
