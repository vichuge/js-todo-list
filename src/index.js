import _ from 'lodash';

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
  

  todoTask.innerHTML = '<ul>' + tasks.map(function (task) {
    return '<li>' + Object.values(task) + '</li>';
  }).join('') + '</ul>';

  

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
  //console.log('enter init');
  let container = document.getElementById('container');
  container.appendChild(createTodoList());
}

function component() {
  const element = document.createElement('div');
  init();
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
