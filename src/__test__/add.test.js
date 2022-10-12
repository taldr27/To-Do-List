import add from '../modules/addToDo.js';
import interfaces from '../modules/interfaceClass.js';

describe('adding', () => {
  document.body.innerHTML = `<div class="form-field">
  <form class="form" id="form-section" action="submit">
      <input type="text" id="input-task" class="input-task" placeholder="Add your task here..." autocomplete="off">
      <input type="button" id="addBtn" value="+">
  </form>
</div>
<div class="ul-container">
  <ul class="toDoList" id="toDoList">

  </ul>`;
  test('Should add one element when is called', () => {
    add('Hello');
    interfaces.displayTasks();
    const list = document.querySelectorAll('li');
    expect(list).toHaveLength(2);
  });
});