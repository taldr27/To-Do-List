import Interface from './interfaceClass.js';
import Store from './store.js';

import add from './addToDo.js'

const remove = (e) => {
  Interface.deleteTask(e.target);
  const toDos = Store.getToDos();
  console.log(toDos[0].index);
  for (let i = 0; i < toDos.length; i += 1) {
    toDos[i].index = i + 1;
  }
  Store.deleteTask(parseInt(e.target.id, 10));
};

export default remove;