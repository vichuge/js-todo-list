import Task from './Task.js';
import Project from './Project.js';
import createTodoList from './list.js';

const addTask = (project) => {
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
}

function emptyInputs() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('dueDate').value = '';
}

const closeModal = () => {
    document.getElementById('close').click();
}

export default addTask;