import _ from 'lodash';
import './style.css';

const createTodoList = () => {
  const tasks = [
    {
      title: 'title1',
      desc: 'description1',
      date: '05 / 05 / 2005',
      priority: 'high',
    },
    {
      title: 'title2',
      desc: 'description2',
      date: '06 / 06 / 2006',
      priority: 'low',
    },
  ]
  

  const row = document.createElement('div');
  row.classList.add('row');

  const col = document.createElement('div');
  col.classList.add('col-12');


  let todoTask = document.createElement('ul');
  todoTask.classList.add('list-group');

  todoTask.innerHTML += tasks.map((task) => {
    return `
    <li class="list-group-item ${task.priority === 'low' ? 'bgreen' : task.priority === 'medium' ? 'byellow' : task.priority === 'high' ? 'bred' : ''}">
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value=""
            aria-label="..."
          />
          <h5 class="mb-1">${task.title}</h5>
          <p>${task.desc}</p>
          <small>${task.date}</small>
          <input
            class="btn btn-primary"
            type="button"
            value="Delete"
          />
        </div>
      </div>
    </li>`;
  }).join('');

  row.appendChild(col, tasks);
  col.appendChild(todoTask);

  return row;
}

/*const addTasks = (col, list) => {
  const col = list.map(c => {
    col.innerHTML = 'hi there!';
    return col;
    let li = document.createElement('li');
    let div = document.createElement('div');
    let div2 = documen.createElement('div');
    let checkInput = document.createElement('input');
    let h5 = document.createElement('h5');
    let small = document.createElement('small');
    let delInput = document.createElement('input')
    colu.innerHTML = `
    <div class="row">
      <div class="col-12 d-flex justify-content-between">
        <input
          class="form-check-input me-1"
          type="checkbox"
          value=""
          aria-label="..."
        />
        <h5 class="mb-1">List group item heading</h5>
        <small>06 / 04 / 2021</small>
        <input
          class="btn btn-primary"
          type="button"
          value="Delete"
        />
      </div>
    </div>
    `;
  });
}*/

const init = () => {
  let container = document.getElementById('container');
  container.appendChild(createTodoList());
}

function component() {
  init();
}

component();
