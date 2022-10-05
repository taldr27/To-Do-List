import './style.css';
import addTask from './modules/addToDo.js';
import displayTasks from './modules/interfaceClass.js';
import clearTasks from './modules/clear.js';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = Object.fromEntries(new FormData(e.target));
  addTask(input.task);
  displayTasks();
});

const clearBtn = document.querySelector('.clearbtn');

clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  clearTasks();
  displayTasks();
});

displayTasks();