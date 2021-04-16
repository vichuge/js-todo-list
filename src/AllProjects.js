class AllProjects {
  constructor() {
    this.list = [];
  }

  addElement(elem) {
    this.list.push(elem);
  }

  deleteElement(title) {
    for (let i = 0; i < this.list.length; i += 1) {
      if (this.list[i].title === title) this.list.splice(i, 1);
    }
  }
}

export default AllProjects;
