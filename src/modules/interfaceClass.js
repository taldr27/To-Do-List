import Store from './store.js';

export default class Interface {
  static displayTasks() {
    const toDos = Store.getToDos();
    toDos.forEach((toDo) => Interface.addTask(toDo));
  }

  static addTask(toDo) {
    const ulList = document.getElementById('toDoList');
    const task = document.createElement('li');
    task.innerHTML = `<input type="checkbox" name="completed" id="completed"> ${toDo.value} <button class="edit">Edit</button>
        <button id=${toDo.index} class="delete">Delete</button>`;
    ulList.appendChild(task);
  }

  static deleteTask(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }
}