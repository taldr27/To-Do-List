export default function clearTasks() {
  /* Clear completed tasks */
  const parsedArr = JSON.parse(localStorage.getItem('toDos'));
  const temp = parsedArr.filter((toDo) => toDo.completed === false);
  localStorage.setItem('toDos', JSON.stringify(temp));
}