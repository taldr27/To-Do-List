import Store from './store.js';

export default class Interface {
  static displayTasks() {
    const toDos = Store.getToDos();
    toDos.forEach((toDo) => Interface.addTask(toDo));
  }

  static addTask(toDo) {
    const ulList = document.getElementById('toDoList');
    const task = document.createElement('li');

    const check = document.createElement('input');
    check.type = 'checkbox';
    check.id = 'completed';
    check.checked = toDo.completed;

    check.addEventListener('click', (e) => {
      console.log(e.target.checked);
      toDo.completed = e.target.checked;
      Store.check(toDo.completed, toDo.index);
    });

    const text = document.createElement('textarea');
    text.id = 'task-value';
    text.readOnly = true;
    text.classList.add('text-area');
    text.value = toDo.value;

    const editBtn = document.createElement('button');
    editBtn.id = toDo.index;
    editBtn.classList.add('edit');
    editBtn.innerHTML = 'Edit';

    task.appendChild(check);
    task.appendChild(text);
    task.appendChild(editBtn);

    editBtn.addEventListener('click', () => {
      text.removeAttribute('readonly');
      editBtn.innerHTML = 'Save';
      text.focus();
      editBtn.addEventListener('click', () => {
        text.setAttribute('readonly', true);
        editBtn.innerHTML = 'Edit';
        console.log(text.value, toDo.index);
        Store.editTask(text.value, toDo.index);
      });
    });

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

  // static editTask(eT) {
  //   if (eT.classList.contains('edit')) {
  //     eT.previousElementSibling.removeAttribute('readonly');
  //     eT.previousElementSibling.focus();
  //     eT.innerText = 'Save';
  //     // eT.id = 'save';
  //     eT.className = 'save';
  //   } else if (eT.classList.contains('save')) {
  //     eT.innerText = 'Edit';
  //     // eT.id = 'edit';
  //     eT.className = 'edit';
  //     eT.previousElementSibling.readOnly = true;
  //     console.log(eT.previousElementSibling.value, eT.id, eT);
  //     Store.editTask(eT.previousElementSibling.value, eT.id);
  //   }
  // }
}