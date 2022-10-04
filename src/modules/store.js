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

  static deleteTask(element) {
    const toDos = Store.getToDos();
    toDos.forEach((toDo, id) => {
      if (toDo.index === element) {
        toDos.splice(id, 1);
        console.log(toDo, id);
      }
    });
    toDos.forEach((toDo, i) => {
      toDo.index = i + 1;
    });
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }
}
