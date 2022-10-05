export default function displayTasks() {


    /* Checkbox status   */
    const checkbox = taskItem.querySelector('.checkbox');
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      localStorage.setItem('taskArr', JSON.stringify(parsedArr));

      if (task.completed) {
        updateText.style.textDecoration = 'line-through';
      } else {
        updateText.style.textDecoration = 'none';
      }
    });

    return taskList;
  });
}