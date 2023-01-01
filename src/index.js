import './style.css';
import add from './modules/addToDo.js';
import interfaces from './modules/interfaceClass.js';
import Store from './modules/store.js';

document.addEventListener('DOMContentLoaded', interfaces.displayTasks);
document.querySelector('#form-section').addEventListener('submit', (e) => {
  const text = document.getElementById('input-task').value;
  e.preventDefault();
  add(text);
});
document.querySelector('#addBtn').addEventListener('click', (e) => {
  const text = document.getElementById('input-task').value;
  e.preventDefault();
  add(text);
});

const clearAll = document.querySelector('.clearCompleted');
clearAll.addEventListener('click', () => {
  Store.clearAll();
  window.location.reload();
});

document.querySelector('.fa-solid').addEventListener('click', () => {
  window.location.reload();
});