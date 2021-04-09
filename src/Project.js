import { indexOf } from "lodash";

class Project {
    constructor(title = 'default', description = 'default project') {
        this.title = title;
        this.description = description;
        this.list = [];
    }

    addElement(elem) {
        //if (indexOf(elem) === Task) {
            this.list.push(elem);
        //}
        
    }

    deleteElement(title) {
        for (let i = 0; i < this.list.length; i += 1) {
            (this.list[i].title === title) ? this.list.splice(i, 1) : '';
        }
    }
}

export default Project;