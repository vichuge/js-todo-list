class AllProjects {
    constructor() {
        this.list = [];
    }

    addElement(elem) {
        this.list.push(elem);
    }

    deleteElement(index){
        this.list.splice(index,1)
    }
}

export default AllProjects;
