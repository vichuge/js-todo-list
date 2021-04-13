import allProjectsFunc from "./index";
import funcs from "./modal";

const lists = {
    createProjectsList(list) {
        let ul = document.getElementById('projectsList');
        ul.innerHTML = '';
        const li1 = document.createElement('li');
        li1.classList.add('list-group-item');
        li1.innerHTML = 'All projects';
        li1.id = 'liclickable';
        li1.addEventListener('click', () => { this.createTodoList() });
        ul.appendChild(li1);
        const mappy = list.map((project) => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.innerHTML = project.title;
            li.id = 'liclickable';
            li.addEventListener('click', () => { this.createTodoList(project) });
            ul.appendChild(li);
        }).join('');
    },
    createTodoList(tasks = 'default') {

        let container = document.getElementById('container');
        container.innerHTML = '';
        const row = document.createElement('div');
        row.classList.add('row');

        const col = document.createElement('div');
        col.classList.add('col-12');

        let todoTask = document.createElement('ul');
        todoTask.classList.add('todoTask');

        if (tasks != 'default') {
            runList(todoTask, tasks, tasks);
        } else {
            const allProjects = allProjectsFunc();
            for (let i = 0; i < allProjects.list.length; i += 1) {
                runList(todoTask, allProjects.list[i], tasks);
            }
        }
        row.appendChild(col, tasks.list);
        col.appendChild(todoTask);

        const title = document.createElement('h2');
        if (typeof tasks.title === 'undefined') {
            title.innerHTML = 'All projects';
        } else {
            title.innerHTML = tasks.title;
        }

        container.appendChild(title);
        container.appendChild(row);
    }
}

const deleteTask = (project, titleProject, list) => {
    for (let i = 0; i < project.list.length; i += 1) {
        if (titleProject === project.list[i].title) {
            project.list.splice(i, 1);
        }
    }
    (list === 'default') ? lists.createTodoList() : lists.createTodoList(project);
}

const changeCheck = (project, titleProject) => {
    for (let i = 0; i < project.list.length; i += 1) {
        if (titleProject === project.list[i].title) {
            (project.list[i].check === true) ? project.list[i].check = false : project.list[i].check = true;
        }
    }
}

const updateTask = (project, titleTask, list = 'default') => {
    let myProject = '';
    let myTask = '';
    for (let i = 0; i < project.list.length; i += 1) {
        if (titleTask === project.list[i].title) {
            myTask = project.list[i];
            myProject = project.title;
        }
    }
    const titleEdit = document.getElementById('titleEdit');
    const descEdit = document.getElementById('descriptionEdit');
    const dateEdit = document.getElementById('dateEdit');
    const priorEdit = document.getElementById('prioritySelectEdit');
    const projectEdit = document.getElementById('projectSelectEdit');

    titleEdit.value = myTask.title;
    descEdit.value = myTask.desc;
    const constructDate = `${myTask.date.getFullYear()}-${("0" + myTask.date.getMonth()).slice(-2)}-${("0" + myTask.date.getDay()).slice(-2)}`;
    dateEdit.value = constructDate;

    for (let i=0; i < priorEdit.length; i+=1) {
        (myTask.priority === priorEdit[i].value) ? priorEdit[i].setAttribute('selected','') : '';
    }
    
    for (let i=0; i<projectEdit.length; i+=1) {
        (myProject === projectEdit[i].value) ? projectEdit[i].setAttribute('selected','') : '';
    }
}

const runList = (todoTask, tasks, nextList) => {
    const mappy = tasks.list.map((task, index) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        task.priority === 'Low' ? li.classList.add('bgreen') : task.priority === 'Medium' ? li.classList.add('byellow') : task.priority === 'High' ? li.classList.add('bred') : '';

        const div1 = document.createElement('div');
        div1.classList.add('row');

        const div2 = document.createElement('div');
        div2.classList.add('col-12');
        div2.classList.add('d-flex');
        div2.classList.add('justify-content-between');

        const input1 = document.createElement('input');
        input1.classList.add('form-check-input');
        input1.classList.add('me-1');
        input1.type = 'checkbox';
        input1.addEventListener('click', () => { changeCheck(tasks, task.title) });
        (task.check === true) ? input1.setAttribute('checked', '') : '';

        const h5 = document.createElement('h5');
        h5.classList.add('mb-1');
        h5.innerText = task.title;

        const p = document.createElement('p');
        p.innerText = task.desc;

        const small = document.createElement('small');
        let date = new Date(task.date)
        small.innerText = `${date.getFullYear()}/${("0" + date.getMonth()).slice(-2)}/${("0" + date.getDay()).slice(-2)}`;

        const button2 = document.createElement('button');
        button2.classList.add('btn');
        button2.classList.add('btn-primary');
        button2.type = 'button';
        button2.id = 'editTask';
        button2.innerHTML = 'Edit';
        button2.setAttribute('data-bs-toggle', 'modal');
        button2.setAttribute('data-bs-target', '#exampleModal3');
        button2.addEventListener('click', () => { updateTask(tasks, task.title, tasks); });

        const input2 = document.createElement('button');
        input2.classList.add('btn');
        input2.classList.add('btn-primary');
        input2.type = 'button';
        input2.id = 'deleteid';
        input2.innerHTML = 'Delete';
        input2.addEventListener('click', () => { deleteTask(tasks, task.title, nextList); });

        div2.appendChild(input1);
        div2.appendChild(h5);
        div2.appendChild(p);
        div2.appendChild(small);
        div2.appendChild(button2);
        div2.appendChild(input2);
        div1.appendChild(div2);
        li.appendChild(div1);
        todoTask.appendChild(li);
    }).join('');
}
export default lists;
