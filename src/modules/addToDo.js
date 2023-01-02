import Interface from './interfaceClass.js';
import Store from './store.js';
import ToDos from './ToDoConstructor.js';

export default function add(task) {
  const form = document.getElementById('form-section');
  const inputText = document.getElementById('input-task');
  const message = document.createElement('p');
  message.className = 'error-input';
  message.innerHTML = 'Please insert something into the field';
  if (inputText.value === '') {
    form.insertAdjacentElement('afterend', message);
    setTimeout(() => {
      message.remove();
    }, 1000);
  } else {
    const completed = 'asd';
    const toIndex = Store.getToDos().length + 1;
    const toDo = new ToDos(task, completed, toIndex);
    Interface.addTask(toDo);
    Store.addTask(toDo);
    inputText.value = '';
  }
}