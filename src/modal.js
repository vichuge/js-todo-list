import Task from './Task.js';
import lists from './list.js';
import Project from './Project.js';
import allProjectsFunc from "./index";

const funcs = {
    addTask(projects) {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = new Date(document.getElementById('dueDate').value);
        const priority = document.getElementById('prioritySelect').value;
        const projectName = document.getElementById('projectsSelect').value;

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

        const allProjects = allProjectsFunc();
        const elem = new Task(title, description, dueDate, priority);
        let project = '';
        for (let i = 0; i < allProjects.list.length; i += 1) {
            if (allProjects.list[i].title === projectName) {
                project = allProjects.list[i];
                allProjects.list[i].addElement(elem);
            }

        }
        lists.createTodoList(project);
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

        const select2 = document.getElementById('projectsSelect');
        const option = document.createElement('option');
        option.value = title;
        option.innerHTML = title;
        select2.appendChild(option);

        const elem = new Project(title, description);
        projects.push(elem);
        console.log(projects);
        emptyInputs();
        closeModal2();
        lists.createProjectsList(projects);
        lists.createTodoList();
    },
    editTask(myTask, nextList) {

        const title = document.getElementById('titleEdit').value;
        const description = document.getElementById('descriptionEdit').value;
        const dueDate = new Date(document.getElementById('dateEdit').value);
        const priority = document.getElementById('prioritySelectEdit').value;

        console.log(title);
        console.log(description);
        console.log(dueDate);
        console.log(priority);
        console.log('---');

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

        myTask.title = title;
        myTask.desc = description;
        myTask.date = dueDate;
        myTask.priority = priority;

        emptyInputsEdit();
        closeModalEdit();
        lists.createTodoList(nextList);
    },
    buildModal() {

        const div5 = document.createElement('div');
        div5.setAttribute('id', 'exampleModal');
        div5.classList.add('modal');
        div5.classList.add('fade');
        div5.setAttribute("tabindex", "-1");
        div5.setAttribute("aria-labelledby", "exampleModalLabel");
        div5.setAttribute("aria-hidden", "true");

        const div6 = document.createElement('div');
        div6.classList.add('modal-dialog');

        const div7 = document.createElement('div');
        div7.classList.add('modal-content');

        const div8 = document.createElement('div');
        div8.classList.add('modal-header');

        const h5 = document.createElement('h5');
        h5.setAttribute('id', 'exampleModalLabel');
        h5.classList.add('modal-title');
        h5.innerHTML = "Enter the task information"

        const button2 = document.createElement('button');
        button2.type = "button";
        button2.classList.add('btn-close');
        button2.setAttribute("data-bs-dismiss", "modal");
        button2.setAttribute("aria-label", "Close");
        button2.id = 'close';

        div8.appendChild(h5);
        div8.appendChild(button2);

        const div9 = document.createElement('div');
        div9.classList.add("modal-body");

        const div10 = document.createElement('div');
        div10.classList.add("row");

        const div11 = document.createElement('div');
        div11.classList.add("col-12");

        const p1 = document.createElement('p');
        p1.classList.add("error");
        p1.setAttribute("id", "error");

        div11.appendChild(p1);
        div10.appendChild(div11);
        div9.appendChild(div10);

        const div12 = document.createElement('div');
        div12.classList.add("row");

        const div21 = document.createElement('div');
        div21.classList.add("col-12");
        div21.classList.add("mb-2");

        const label1 = document.createElement('label');
        label1.htmlFor = 'title';
        label1.innerHTML = 'Title';

        const input2 = document.createElement('input');
        input2.type = 'text';
        input2.id = 'title';
        input2.name = 'title';

        div21.appendChild(label1);
        div21.appendChild(input2);
        div12.appendChild(div21);
        div9.appendChild(div12);

        const div13 = document.createElement('div');
        div13.classList.add("row");

        const div14 = document.createElement('div');
        div14.classList.add("col-12");
        div14.classList.add("mb-2");

        const label2 = document.createElement('label');
        label2.htmlFor = 'description';
        label2.innerHTML = "Description";

        const textarea1 = document.createElement('textarea');
        textarea1.classList.add("form-control");
        textarea1.id = 'description';
        textarea1.setAttribute("placeholder", "Add description here");
        textarea1.name = "description";

        div14.appendChild(label2);
        div14.appendChild(textarea1);
        div13.appendChild(div14);
        div9.appendChild(div13);

        const div15 = document.createElement('div');
        div15.classList.add("row");

        const div16 = document.createElement('div');
        div16.classList.add("col-12");

        const label3 = document.createElement('label');
        label3.htmlFor = 'dueDate';
        label3.innerHTML = "DueDate";

        const input1 = document.createElement('input');
        input1.setAttribute("id", "dueDate");
        input1.type = "date";
        input1.name = "dueDate";

        div16.appendChild(label3);
        div16.appendChild(input1);
        div15.appendChild(div16);
        div9.appendChild(div15);

        const div17 = document.createElement('div');
        div17.classList.add("row");

        const div18 = document.createElement('div');
        div18.classList.add("col-12");
        div18.classList.add("mt-3");

        const select = document.createElement('select');
        select.classList.add("form-select");
        select.setAttribute("aria-label", "Default select example");
        select.setAttribute("id", "prioritySelect");

        const option = document.createElement('option');
        option.value = "low";
        option.innerHTML = "Low";

        const option1 = document.createElement('option');
        option1.value = "medium";
        option1.innerHTML = "Medium";

        const option2 = document.createElement('option');
        option2.value = "high";
        option2.innerHTML = "High";

        select.appendChild(option);
        select.appendChild(option1);
        select.appendChild(option2);
        div18.appendChild(select);
        div17.appendChild(div18);
        div9.appendChild(div17);


        const div31 = document.createElement('div');
        div31.classList.add("row");

        const div32 = document.createElement('div');
        div32.classList.add("col-12");
        div32.classList.add("mt-3");

        const select2 = document.createElement('select');
        select2.classList.add("form-select");
        select2.setAttribute("aria-label", "Default select example");
        select2.setAttribute("id", "prioritySelect");
        select2.id = 'projectsSelect';

        const allProjects = allProjectsFunc();
        for (let i = 0; i < allProjects.list.length; i += 1) {
            const option = document.createElement('option');
            option.value = allProjects.list[i].title;
            option.innerHTML = allProjects.list[i].title;
            select2.appendChild(option);
        };

        div32.appendChild(select2);
        div31.appendChild(div32);
        div9.appendChild(div31);

        const div19 = document.createElement('div');
        div19.classList.add("modal-footer");


        const button3 = document.createElement('button');
        button3.type = "button";
        button3.classList.add("btn");
        button3.classList.add("btn-secondary");
        button3.setAttribute("data-bs-dismiss", "modal");
        button3.innerHTML = "Close"

        const button4 = document.createElement('button');
        button4.type = "button";
        button4.classList.add("btn");
        button4.classList.add("btn-primary");
        button4.id = "testProject"
        button4.innerHTML = "Add Task"
        button4.setAttribute("id", "createTask");

        div19.appendChild(button3);
        div19.appendChild(button4);


        div7.appendChild(div8);
        div7.appendChild(div9);
        div7.appendChild(div19);
        div6.appendChild(div7);
        div5.appendChild(div6);

        return div5;

    },
    editModal() {

        const div50 = document.createElement('div');
        div50.setAttribute('id', 'exampleModal3');
        div50.classList.add('modal');
        div50.classList.add('fade');
        div50.setAttribute("tabindex", "-1");
        div50.setAttribute("aria-labelledby", "exampleModalLabel");
        div50.setAttribute("aria-hidden", "true");

        const div6 = document.createElement('div');
        div6.classList.add('modal-dialog');

        const div7 = document.createElement('div');
        div7.classList.add('modal-content');

        const div8 = document.createElement('div');
        div8.classList.add('modal-header');

        const h5 = document.createElement('h5');
        h5.setAttribute('id', 'exampleModalLabelEdit');
        h5.classList.add('modal-title');
        h5.innerHTML = "Edit the task information"


        const button2 = document.createElement('button');
        button2.type = "button";
        button2.classList.add('btn-close');
        button2.setAttribute("data-bs-dismiss", "modal");
        button2.setAttribute("aria-label", "Close");
        button2.setAttribute("id", "closeEdit");

        div8.appendChild(h5);
        div8.appendChild(button2);


        const div9 = document.createElement('div');
        div9.classList.add("modal-body");

        const div10 = document.createElement('div');
        div10.classList.add("row");

        const div11 = document.createElement('div');
        div11.classList.add("col-12");

        const p1 = document.createElement('p');
        p1.classList.add("error");
        p1.setAttribute("id", "error");

        div11.appendChild(p1);
        div10.appendChild(div11);
        div9.appendChild(div10);



        const div12 = document.createElement('div');
        div12.classList.add("row");

        const div21 = document.createElement('div');
        div21.classList.add("col-12");
        div21.classList.add("mb-2");


        const label1 = document.createElement('label');
        label1.htmlFor = 'title';
        label1.innerHTML = 'Title';

        const input2 = document.createElement('input');
        input2.type = 'text';
        input2.id = 'titleEdit';
        input2.name = 'title';


        div21.appendChild(label1);
        div21.appendChild(input2);
        div12.appendChild(div21);
        div9.appendChild(div12);



        const div13 = document.createElement('div');
        div13.classList.add("row");

        const div14 = document.createElement('div');
        div14.classList.add("col-12");
        div14.classList.add("mb-2");

        const label2 = document.createElement('label');
        label2.htmlFor = 'description';
        label2.innerHTML = "Description";

        const textarea1 = document.createElement('textarea');
        textarea1.classList.add("form-control");
        textarea1.id = 'descriptionEdit';
        textarea1.setAttribute("placeholder", "Add description here");
        textarea1.name = "description";


        div14.appendChild(label2);
        div14.appendChild(textarea1);
        div13.appendChild(div14);
        div9.appendChild(div13);

        const div15 = document.createElement('div');
        div15.classList.add("row");

        const div16 = document.createElement('div');
        div16.classList.add("col-12");

        const label3 = document.createElement('label');
        label3.htmlFor = 'dueDate';
        label3.innerHTML = "DueDate";

        const input1 = document.createElement('input');
        input1.setAttribute("id", "dateEdit");
        input1.type = "date"
        input1.name = "dueDate";

        div16.appendChild(label3);
        div16.appendChild(input1);
        div15.appendChild(div16);
        div9.appendChild(div15);

        const div17 = document.createElement('div');
        div17.classList.add("row");

        const div18 = document.createElement('div');
        div18.classList.add("col-12");
        div18.classList.add("mt-3");

        const select = document.createElement('select');
        select.classList.add("form-select");
        select.setAttribute("aria-label", "Default select example");
        select.setAttribute("id", "prioritySelectEdit");

        const priors = ['Low', 'Medium', 'High'];
        for (let i = 0; i < priors.length; i += 1) {
            const option = document.createElement('option');
            option.value = priors[i];
            option.innerHTML = priors[i];
            //option.setAttribute('selected','');
            select.appendChild(option);
        }

        div18.appendChild(select);
        div17.appendChild(div18);
        div9.appendChild(div17);

        const div31 = document.createElement('div');
        div31.classList.add("row");

        const div32 = document.createElement('div');
        div32.classList.add("col-12");
        div32.classList.add("mt-3");

        div31.appendChild(div32);
        div9.appendChild(div31);

        const div19 = document.createElement('div');
        div19.classList.add("modal-footer");

        const button3 = document.createElement('button');
        button3.type = "button";
        button3.classList.add("btn");
        button3.classList.add("btn-secondary");
        button3.setAttribute("data-bs-dismiss", "modal");
        button3.innerHTML = "Close"

        const button4 = document.createElement('button');
        button4.type = "button";
        button4.classList.add("btn");
        button4.classList.add("btn-primary");
        //button4.id = "testProject"
        button4.innerHTML = "Edit Task"
        button4.id = "updateTaskModal";
        //button4.addEventListener('click', () => { editedTask()});

        div19.appendChild(button3);
        div19.appendChild(button4);

        div7.appendChild(div8);
        div7.appendChild(div9);
        div7.appendChild(div19);
        div6.appendChild(div7);
        div50.appendChild(div6);

        return div50;

    }
}

function emptyInputs() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('dueDate').value = '';

    document.getElementById('title2').value = '';
    document.getElementById('description2').value = '';
}

function emptyInputsEdit() {
    document.getElementById('titleEdit').value = '';
    document.getElementById('descriptionEdit').value = '';
    document.getElementById('dateEdit').value = '';
    /*const priorEdit = document.getElementById('prioritySelectEdit');
    for (let i=0; i < priorEdit.length; i+=1) {
        priorEdit[i].removeAttribute('selected');
    }*/
}

const editedTask = () => {


    const title = document.getElementById('titleEdit').value;
    const description = document.getElementById('descriptionEdit').value;
    const dueDate = new Date(document.getElementById('dateEdit').value);
    const priority = document.getElementById('prioritySelectEdit').value;


    console.log(title);
    console.log(description);
    console.log(dueDate);
    console.log(priority);

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

    const allProjects = allProjectsFunc();
    const elem = new Task(title, description, dueDate, priority);
    emptyInputs();
    closeModal();
}

const closeModal = () => {
    document.getElementById('close').click();
}

const closeModal2 = () => {
    document.getElementById('close2').click();
}

const closeModalEdit = () => {
    document.getElementById('closeEdit').click();
}

export default funcs;
