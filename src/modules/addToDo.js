import Task from './toDoConstructor.js';

/* Store Tasks */

export default function addTask(task) {
  const parsedArr = JSON.parse(localStorage.getItem('taskArr')) || [];
  const counter = parsedArr.length + 1;
  const newTask = new Task(counter, task);

  parsedArr.push(newTask);
  localStorage.setItem('taskArr', JSON.stringify(parsedArr));

  const taskfield = document.querySelector('.text-field');
  taskfield.value = '';
}