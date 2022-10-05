export default function displayTasks() {
  const taskList = document.querySelector('.toDoList');

  /* Display Tasks */
  let parsedArr = JSON.parse(localStorage.getItem('taskArr')) || [];

  taskList.innerHTML = '';
  parsedArr.map((task) => {
    const taskItem = document.createElement('li');
    let box;
    let styling;
    if (task.completed) {
      box = 'checked';
      styling = 'line-through';
    } else {
      box = '';
      styling = 'none';
    }
    taskItem.innerHTML = `<form class="task-form b-bottom box">
      <input name="completed" type="checkbox" ${box} class="checkbox">
      <textarea name="description" rows="1" class="task-text full" style="text-decoration:${styling}">${task.description}</textarea>
      <button type="button" class="delete btn">
      <i class="fa-solid fa-trash"></i>
      </button>
      <button type="submit" class="update btn">
      <i class="fa-solid fa-pen"></i>
      </button>
      </form>`;
  });
}