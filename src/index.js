// import './style.css';
import add from './modules/addToDo.js';
import remove from './modules/removeToDo.js';
import interfaces from './modules/interfaceClass.js';
import edit from './modules/editToDo.js';

document.addEventListener('DOMContentLoaded', interfaces.displayTasks);
document.querySelector('#form-section').addEventListener('submit', add);
document.querySelector('#toDoList').addEventListener('click', remove);

document.querySelector('#toDoList').addEventListener('click', edit);