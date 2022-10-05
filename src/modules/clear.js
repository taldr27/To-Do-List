export default function clearTasks() {
  const parsedArr = JSON.parse(localStorage.getItem('toDos'));
  const temp = parsedArr.filter((item) => item.completed === false);
  localStorage.setItem('toDos', JSON.stringify(temp));
}