export default class Store {
  static getToDos() {
    let toDos;
    if (localStorage.getItem('toDos') === null) {
      toDos = [];
    } else {
      toDos = JSON.parse(localStorage.getItem('toDos'));
    }

    return toDos;
  }

  static addTask(toDo) {
    const toDos = Store.getToDos();
    toDos.push(toDo);
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }

  static deleteTask(id) {
    const toDos = Store.getToDos();
    toDos.forEach((toDo, index) => {
      if (toDo.index === id) {
        toDos.splice(index, 1);
      }
    });
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }
}