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

    deleteElement(index){
        this.list.splice(index,1)
    }
}

export default Project;