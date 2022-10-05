import Store from './store.js';

export default class Interface {
  static displayTasks() {
    const toDos = Store.getToDos();
    toDos.forEach((toDo) => Interface.addTask(toDo));
  }

  static addTask(toDo) {
    const ulList = document.getElementById('toDoList');
    const task = document.createElement('li');
    task.innerHTML = `<input type="checkbox" name="completed" id="completed"> <textarea id="task-value" readonly="readonly" class="text-area">${toDo.value}</textarea> <button id=${toDo.index} class="edit">Edit</button>`;
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<button id=${toDo.index} class="delete">Delete</button>`;
    ulList.appendChild(task);
    task.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => {
      deleteBtn.parentElement.remove();
      Store.deleteTask(toDo.index);
    });
  }

  static deleteTask(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  static editTask(eT) {
    if (eT.classList.contains('edit')) {
      eT.previousElementSibling.removeAttribute('readonly');
      eT.previousElementSibling.focus();
      eT.innerText = 'Save';
      // eT.id = 'save';
      eT.className = 'save';
    } else if (eT.classList.contains('save')) {
      eT.innerText = 'Edit';
      // eT.id = 'edit';
      eT.className = 'edit';
      eT.previousElementSibling.readOnly = true;
      console.log(eT.previousElementSibling.value, eT.id, eT);
      Store.editTask(eT.previousElementSibling.value, eT.id);
    }
  }
}