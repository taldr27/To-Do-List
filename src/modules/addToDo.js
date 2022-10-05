import Interface from './interfaceClass.js';
import Store from './store.js';
import ToDos from './ToDoConstructor.js';

const add = (e) => {
  // const completed = check.checkToDo();
  e.preventDefault();
  const text = document.getElementById('input-task').value;

  if (text === '') {
    const section = document.getElementById('form-section');
    const message = document.createElement('p');
    message.innerHTML = 'Please put something into the fields';
    section.insertAdjacentElement('afterend', message);
    setTimeout(() => { message.remove(); }, 2000);
  } else {
    const toIndex = Store.getToDos().length + 1;

    const toDo = new ToDos(text, true, toIndex);

    Interface.addTask(toDo);
    Store.addTask(toDo);
  }
};

export default add;