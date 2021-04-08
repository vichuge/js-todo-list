import Task from './Task.js';
import createTodoList from './list.js';
import Project from './Project.js';

const funcs = {
    addTask(project) {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('dueDate').value;
        const priority = document.getElementById('prioritySelect').value;

        const errors = document.getElementById('error');
        errors.innerHTML = '';
        if (title === '') {
            errors.innerHTML += 'Title can\'t be blank';
            return;
        }
        if (description === '') {
            errors.innerHTML += 'Description can\'t be blank';
            return;
        }
        if (dueDate === '') {
            errors.innerHTML += ' Date can\'t be blank';
            return;
        }

        const elem = new Task(title, description, dueDate, priority);
        project.addElement(elem);
        createTodoList(project);
        emptyInputs();
        closeModal();
    },
    addProject(projects) {
        const title = document.getElementById('title2').value;
        const description = document.getElementById('description2').value;

        const errors = document.getElementById('error2');
        errors.innerHTML = '';
        if (title === '') {
            errors.innerHTML += 'Title can\'t be blank';
            return;
        }
        if (description === '') {
            errors.innerHTML += 'Description can\'t be blank';
            return;
        }

        const elem = new Project(title, description);
        projects.push(elem);
        console.log(projects);
        emptyInputs();
        closeModal2();
    },
    buildModal() {
        console.log('builded');
    }
}
//const addTask = (project) => {}
//const addProject = (projects) => {}

function emptyInputs() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('dueDate').value = '';

    document.getElementById('title2').value = '';
    document.getElementById('description2').value = '';
}

const closeModal = () => {
    document.getElementById('close').click();
}

const closeModal2 = () => {
    document.getElementById('close2').click();
}

export default funcs;
