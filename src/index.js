import add from './modules/addToDo.js';
import interfaces from './modules/interfaceClass.js';
import edit from './modules/editToDo.js';
import clearTasks from './modules/clear.js';
import './style.css';

document.querySelector('#form-section').addEventListener('submit', add);
document.querySelector('#addBtn').addEventListener('click', add);

document.querySelector('#toDoList').addEventListener('click', edit);

document.addEventListener('DOMContentLoaded', interfaces.displayTasks);

const clearBtn = document.querySelector('.clearCompleted');

clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  clearTasks();
  interfaces();
});