import allProjectsFunc from './object';

const nothing = (n) => n;

const changeCheck = (project, titleProject) => {
  for (let i = 0; i < project.list.length; i += 1) {
    if (titleProject === project.list[i].title) {
      let chk = project.list[i].check;
      if (chk === true) {
        chk = false;
      } else {
        chk = true;
      }
    }
  }
  const allProjects = allProjectsFunc();
  localStorage.removeItem('myProjects');
  localStorage.setItem('myProjects', JSON.stringify(allProjects));
};

const lists = {
  createProjectsList() {
    const { list } = allProjectsFunc();
    const ul = document.getElementById('projectsList');
    ul.innerHTML = '';
    const li1 = document.createElement('li');
    li1.classList.add('list-group-item');
    li1.innerHTML = 'All projects';
    li1.id = 'liclickable';
    li1.addEventListener('click', () => { this.createTodoList(); });
    ul.appendChild(li1);
    const mappy = list.map((project) => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      li.innerHTML = project.title;
      li.id = 'liclickable';
      li.addEventListener('click', () => { this.createTodoList(project); });
      ul.appendChild(li);
      return ul;
    }).join('');
    nothing(mappy);
  },
  createTodoList(tasks = 'default') {
    const container = document.getElementById('container');
    container.innerHTML = '';
    const row = document.createElement('div');
    row.classList.add('row');

    const col = document.createElement('div');
    col.classList.add('col-12');

    const todoTask = document.createElement('ul');
    todoTask.classList.add('todoTask');

    if (tasks !== 'default') {
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
  },
};

const editTask = (myTask, nextList) => {
  const title = document.getElementById('titleEdit').value;
  const description = document.getElementById('descriptionEdit').value;
  const dueDate = document.getElementById('dateEdit').value;
  const priority = document.getElementById('prioritySelectEdit').value;

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

  document.getElementById('titleEdit').value = '';
  document.getElementById('descriptionEdit').value = '';
  document.getElementById('dateEdit').value = '';
  document.getElementById('closeEdit').click();
  lists.createTodoList(nextList);
  const allProjects = allProjectsFunc();
  localStorage.removeItem('myProjects');
  localStorage.setItem('myProjects', JSON.stringify(allProjects));
};

const updateTask = (project, titleTask, list = 'default') => {
  const titleEdit = document.getElementById('titleEdit');
  const descEdit = document.getElementById('descriptionEdit');
  const dateEdit = document.getElementById('dateEdit');
  const priorEdit = document.getElementById('prioritySelectEdit');

  for (let i = 0; i < project.list.length; i += 1) {
    if (titleTask === project.list[i].title) {
      titleEdit.value = project.list[i].title;
      descEdit.value = project.list[i].desc;
      dateEdit.value = project.list[i].date;
      priorEdit[0].removeAttribute('selected');
      priorEdit[1].removeAttribute('selected');
      priorEdit[2].removeAttribute('selected');
      for (let j = 0; j < priorEdit.length; j += 1) {
        if (project.list[i].priority === priorEdit[j].value) priorEdit[j].setAttribute('selected', '');
      }
      const btnEdit = document.getElementById('updateTaskModal');
      btnEdit.addEventListener('click', () => { editTask(project.list[i], list); });
    }
  }
};

const deleteTask = (project, titleProject, list) => {
  for (let i = 0; i < project.list.length; i += 1) {
    if (titleProject === project.list[i].title) {
      project.list.splice(i, 1);
    }
  }
  const allProjects = allProjectsFunc();
  localStorage.removeItem('myProjects');
  localStorage.setItem('myProjects', JSON.stringify(allProjects));
  if (list === 'default') {
    lists.createTodoList();
  } else {
    lists.createTodoList(project);
  }
};

const runList = (todoTask, tasks, nextList) => {
  const mappy = tasks.list.map((task) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    switch (task.priority) {
      case 'Low':
        li.classList.add('bgreen');
        break;
      case 'Medium':
        li.classList.add('byellow');
        break;
      case 'High':
        li.classList.add('bred');
        break;
      default:
    }

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
    input1.addEventListener('click', () => { changeCheck(tasks, task.title); });
    if (task.check === true) input1.setAttribute('checked', '');

    const h5 = document.createElement('h5');
    h5.classList.add('mb-1');
    h5.innerText = task.title;

    const p = document.createElement('p');
    p.innerText = task.desc;

    const small = document.createElement('small');
    small.innerHTML = task.date;

    const button2 = document.createElement('button');
    button2.classList.add('btn');
    button2.classList.add('btn-primary');
    button2.type = 'button';
    button2.innerHTML = 'Edit';
    button2.setAttribute('data-bs-toggle', 'modal');
    button2.setAttribute('data-bs-target', '#exampleModal3');
    button2.addEventListener('click', () => { updateTask(tasks, task.title, nextList); });

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
    return todoTask;
  }).join('');
  nothing(mappy);
};

export default lists;
