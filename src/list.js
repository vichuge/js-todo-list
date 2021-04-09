import allProjectsFunc from "./index";

const lists = {
    createProjectsList(list) {
        let ul = document.getElementById('projectsList');
        ul.innerHTML = '';
        const mappy = list.map((project) => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.innerHTML = project.title;
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

                const h5 = document.createElement('h5');
                h5.classList.add('mb-1');
                h5.innerText = task.title;

                const p = document.createElement('p');
                p.innerText = task.desc;

                const small = document.createElement('small');
                small.innerText = task.date;

                const input2 = document.createElement('input');
                input2.classList.add('btn');
                input2.classList.add('btn-primary');
                input2.type = 'button';
                input2.id = 'deleteid';
                input2.value = 'Delete';
                input2.addEventListener('click', () => { deleteTask(tasks, index, projects); });

                div2.appendChild(input1);
                div2.appendChild(h5);
                div2.appendChild(p);
                div2.appendChild(small);
                //div2.appendChild(select);
                div2.appendChild(input2);
                div1.appendChild(div2);
                li.appendChild(div1);
                todoTask.appendChild(li);
            }).join('');
        } else {
            const allProjects = allProjectsFunc();
            for (let i = 0; i < allProjects.list.length; i += 1) {
                for (let j = 0; j < allProjects.list[i].list.length; j += 1) {
                    console.log(allProjects.list[i].list[j]);
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
                    input2.addEventListener('click', () => { deleteTask(tasks, index, projects); });

                    div2.appendChild(input1);
                    div2.appendChild(h5);
                    div2.appendChild(p);
                    div2.appendChild(small);
                    div2.appendChild(input2);
                    div1.appendChild(div2);
                    li.appendChild(div1);
                    todoTask.appendChild(li);
                }
            }
        }
        row.appendChild(col, tasks.list);
        col.appendChild(todoTask);

        const title = document.createElement('h2');
        title.innerHTML = `Project: ${tasks.title}`;

        container.appendChild(title);
        container.appendChild(row);
    }
}

const deleteTask = (project, id, projects) => {
    project.list.splice(id, 1);
    lists.createTodoList(project, projects);
}

export default lists;
