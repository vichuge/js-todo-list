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
        li1.addEventListener('click', () => { this.createTodoList()});
        ul.appendChild(li1);
        const mappy = list.map((project) => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.innerHTML = project.title;
            li.id = 'liclickable';
            li.addEventListener('click', () => { this.createTodoList(project)});
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
            const mappy = tasks.list.map((task, index) => {
                const li = document.createElement('li');
                li.classList.add('list-group-item');
                task.priority === 'low' ? li.classList.add('bgreen') : task.priority === 'medium' ? li.classList.add('byellow') : task.priority === 'high' ? li.classList.add('bred') : '';

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
                (task.check === true) ? input1.setAttribute('checked', ''): '';

                const h5 = document.createElement('h5');
                h5.classList.add('mb-1');
                h5.innerText = task.title;

                const p = document.createElement('p');
                p.innerText = task.desc;

                const small = document.createElement('small');
                small.innerText = task.date;

                

                const div44 = document.createElement('div');
                div44.classList.add('row');
                div44.classList.add('mb-3');
                 
                const div45 = document.createElement('div');
                div45.classList.add('col-12');

                const button2 = document.createElement('button');
                button2.classList.add('btn');
                button2.classList.add('btn-primary');
                button2.type = 'button';
                button2.id = 'editTask';
                button2.innerHTML = 'Edit';
                button2.setAttribute('data-bs-toggle', 'modal');
                button2.setAttribute('data-bs-target', '#exampleModal');
                button2.addEventListener('click', () => { updateTask(tasks, task.title, tasks); });
                     

                div45.appendChild(button2);
                div44.appendChild(div45);
                


                const input2 = document.createElement('input');
                input2.classList.add('btn');
                input2.classList.add('btn-primary');
                input2.type = 'button';
                input2.id = 'deleteid';
                input2.value = 'Delete';
                input2.addEventListener('click', () => { deleteTask(tasks, task.title, tasks); });

                div2.appendChild(input1);
                div2.appendChild(h5);
                div2.appendChild(p);
                div2.appendChild(small);
                div2.appendChild(div44);
                div2.appendChild(input2);
                div1.appendChild(div2);
                li.appendChild(div1);
                todoTask.appendChild(li);
            }).join('');
        } else {
            const allProjects = allProjectsFunc();
            for (let i = 0; i < allProjects.list.length; i += 1) {
                const mappy = allProjects.list[i].list.map((task, index) => {
                    const li = document.createElement('li');
                    li.classList.add('list-group-item');
                    task.priority === 'low' ? li.classList.add('bgreen') : task.priority === 'medium' ? li.classList.add('byellow') : task.priority === 'high' ? li.classList.add('bred') : '';
    
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
                    input1.addEventListener('click', () => { changeCheck(allProjects.list[i], task.title) });
                    (task.check === true) ? input1.setAttribute('checked', ''): '';
    
                    const h5 = document.createElement('h5');
                    h5.classList.add('mb-1');
                    h5.innerText = task.title;
    
                    const p = document.createElement('p');
                    p.innerText = task.desc;
    
                    const small = document.createElement('small');
                    small.innerText = task.date;

                    const div44 = document.createElement('div');
                    div44.classList.add('row');
                    div44.classList.add('mb-3');
                    
                    const div45 = document.createElement('div');
                    div45.classList.add('col-12');

                    const button2 = document.createElement('button');
                    button2.classList.add('btn');
                    button2.classList.add('btn-primary');
                    button2.type = 'button';
                    button2.id = 'editTask';
                    button2.innerHTML = 'Edit';
                    button2.setAttribute('data-bs-toggle', 'modal');
                    button2.setAttribute('data-bs-target', '#exampleModal');
                    button2.addEventListener('click', () => { updateTask(tasks, task.title, tasks); }); 
                    
                    div45.appendChild(button2);
                    div44.appendChild(div45);
    
                    const input2 = document.createElement('input');
                    input2.classList.add('btn');
                    input2.classList.add('btn-primary');
                    input2.type = 'button';
                    input2.id = 'deleteid';
                    input2.value = 'Delete';
                    input2.addEventListener('click', () => { deleteTask(allProjects.list[i], task.title); });
    
                
                    div2.appendChild(input1);
                    div2.appendChild(h5);
                    div2.appendChild(p);
                    div2.appendChild(small);
                    div2.appendChild(div44);
                    div2.appendChild(input2);
                    div1.appendChild(div2);
                    li.appendChild(div1);
                    todoTask.appendChild(li);
                }).join('');
                /*for (let j = 0; j < allProjects.list[i].list.length; j += 1) {
                    const li = document.createElement('li');
                    li.classList.add('list-group-item');
                    allProjects.list[i].list[j].priority === 'low' ? li.classList.add('bgreen') : allProjects.list[i].list[j].priority === 'medium' ? li.classList.add('byellow') : allProjects.list[i].list[j].priority === 'high' ? li.classList.add('bred') : '';

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
                    input1.addEventListener('click', () => { changeCheck(allProjects.list[i], allProjects.list[i].list[j].title) });
                    (allProjects.list[i].list[j].check === true) ? input1.setAttribute('checked', ''): '';

                    const h5 = document.createElement('h5');
                    h5.classList.add('mb-1');
                    h5.innerText = allProjects.list[i].list[j].title;

                    const p = document.createElement('p');
                    p.innerText = allProjects.list[i].list[j].desc;

                    const small = document.createElement('small');
                    small.innerText = allProjects.list[i].list[j].date;

                    const input2 = document.createElement('input');
                    input2.classList.add('btn');
                    input2.classList.add('btn-primary');
                    input2.type = 'button';
                    input2.id = 'deleteid';
                    input2.value = 'Delete';
                    input2.addEventListener('click', () => { deleteTask(allProjects.list[i], allProjects.list[i].list[j].title, 'default'); });

                    div2.appendChild(input1);
                    div2.appendChild(h5);
                    div2.appendChild(p);
                    div2.appendChild(small);
                    div2.appendChild(input2);
                    div1.appendChild(div2);
                    li.appendChild(div1);
                    todoTask.appendChild(li);
                }*/
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
        //title.innerHTML = 'Project:' + (tasks.title === 'undefined') ? 'All tasks' : tasks.title;

        container.appendChild(title);
        container.appendChild(row);
    }
}

const deleteTask = (project, titleProject, list = 'default') => {
    for (let i=0; i < project.list.length; i += 1) {
        if (titleProject === project.list[i].title) {
            project.list.splice(i, 1);
        }
    }
    ( list === 'default') ? lists.createTodoList():lists.createTodoList(project);
}

const changeCheck = (project, titleProject) => {
    for (let i=0; i < project.list.length; i += 1) {
        if (titleProject === project.list[i].title) {
            (project.list[i].check === true) ? project.list[i].check = false : project.list[i].check = true;
        }
    }
}

const updateTask = (project, titleProject, list = 'default') => {
    console.log('hey');
    // for (let i=0; i < project.list.length; i += 1) {
    //     if (titleProject === project.list[i].title) {
    //     }
    // }
    // ( list === 'default') ? lists.createTodoList():lists.createTodoList(project);
}

const runList = () => {

}
export default lists;
