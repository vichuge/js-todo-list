class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.desc = description;
        this.date = dueDate;
        this.priority = priority;
        this.check = false;
    }
}

export default Task;