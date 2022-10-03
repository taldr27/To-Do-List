const ulList = document.getElementById('toDoList');
const tasks = [
  {
    description: 'Do exercise',
    completed: true,
    index: 1,
  },
  {
    description: 'Practice JavaScript',
    completed: false,
    index: 2,
  },
  {
    description: 'Make food',
    completed: true,
    index: 3,
  },
];
export default class displayTasks {
  static addTask() {
    for (let i = 0; i < tasks.length; i += 1) {
      const task = document.createElement('li');
      task.innerHTML = `<input type="checkbox" name="completed" id="completed"> ${tasks[i].description} <i class="fa-solid fa-ellipsis-vertical"></i>`;
      ulList.appendChild(task);
    }
  }
}