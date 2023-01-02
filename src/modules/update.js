const updateid = {
  storage() {
    let tasks;
    if (localStorage.getItem('toDos') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('toDos'));
    }

    tasks.forEach((element, index) => {
      element.index = index + 1;
    });

    localStorage.setItem('toDos', JSON.stringify(tasks));
  },
};

export default updateid;