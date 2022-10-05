import Interface from './interfaceClass.js';
import Store from './store.js';

const remove = (e) => {
  Interface.deleteTask(e.target);
  // Remove book from Local Storage
  Store.deleteTask(parseInt(e.target.id, 10));
};

export default remove;