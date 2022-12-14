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

    const text = document.createElement('input');
    text.id = 'task-value';
    text.readOnly = true;
    text.classList.add('text-area');
    text.value = toDo.value;

    if (check.checked) {
      text.classList.add('completed');
    }

    check.addEventListener('click', (e) => {
      if (e.target.checked) {
        text.classList.add('completed');
        toDo.completed = e.target.checked;
        Store.check(toDo.completed, toDo.index);
      } else {
        text.classList.remove('completed');
        toDo.completed = e.target.checked;
        Store.check(toDo.completed, toDo.index);
      }
    });

    const editBtn = document.createElement('button');
    editBtn.id = toDo.index;
    editBtn.classList.add('edit');
    editBtn.innerHTML = 'Edit';

    task.appendChild(check);
    task.appendChild(text);
    task.appendChild(editBtn);

    editBtn.addEventListener('click', () => {
      if (text.hasAttribute('readonly')) {
        text.removeAttribute('readonly');
        editBtn.innerHTML = 'Save';
        text.focus();
        text.classList.toggle('edit-active');
      } else {
        text.setAttribute('readonly', true);
        editBtn.innerHTML = 'Edit';
        text.classList.toggle('edit-active');
        Store.editTask(text.value, toDo.index);
      }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.id = `Delete-${toDo.index}`;
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.classList = 'delete';
    ulList.appendChild(task);
    task.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => {
      text.value = 'Deleting';
      setTimeout(() => {
        Store.deleteTask(toDo.index);
        window.location.reload();
      }, 500);
    });
  }
}