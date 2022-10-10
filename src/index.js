import './style.css';
import add from './modules/addToDo.js';
import interfaces from './modules/interfaceClass.js';
import Store from './modules/store.js';

document.addEventListener('DOMContentLoaded', interfaces.displayTasks);
document.querySelector('#form-section').addEventListener('submit', add);
document.querySelector('#addBtn').addEventListener('click', add);

const clearAll = document.querySelector('.clearCompleted');
clearAll.addEventListener('click', () => {
  Store.clearAll();
  window.location.reload();
});