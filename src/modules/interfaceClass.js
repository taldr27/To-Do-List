export default function displayTasks() {
  const taskList = document.querySelector('.task-list');

  let toDos = JSON.parse(localStorage.getItem('taskArr')) || [];

  taskList.innerHTML = '';
  toDos.map((task) => {
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
      <textarea name="description" class="task-text size" style="text-decoration:${styling}">${task.description}</textarea>
      <button type="button" class="delete btn">X</button>
      <button type="submit" class="update btn">Save</button>
      </form>`;
    taskList.appendChild(taskItem);

    const deleteBtn = taskItem.querySelector('.delete');
    const updateBtn = taskItem.querySelector('.update');
    const updateText = taskItem.querySelector('.task-text');

    updateBtn.style.display = 'none';

    updateText.addEventListener('click', (e) => {
      e.preventDefault();
      updateBtn.style.display = 'block';
      deleteBtn.style.display = 'none';
      updateText.style.backgroundColor = '#f4f4f4';
    });

    const taskForm = taskItem.querySelector('.task-form');
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = Object.fromEntries(
        new FormData(e.target),
      );
      task.description = input.description;
      localStorage.setItem('taskArr', JSON.stringify(toDos));
      updateBtn.style.display = 'none';
      deleteBtn.style.display = 'block';
      updateText.style.backgroundColor = '#fff';
    });

    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let temp = toDos.filter((item) => item !== task);
      toDos = temp;
      temp = toDos.map((item) => {
        item.index = toDos.indexOf(item) + 1;
        return item;
      });
      toDos = temp;
      localStorage.setItem('taskArr', JSON.stringify(toDos));
      taskList.removeChild(taskItem);
    });

    const checkbox = taskItem.querySelector('.checkbox');
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      localStorage.setItem('taskArr', JSON.stringify(toDos));

      if (task.completed) {
        updateText.style.textDecoration = 'line-through';
      } else {
        updateText.style.textDecoration = 'none';
      }
    });

    return taskList;
  });
}