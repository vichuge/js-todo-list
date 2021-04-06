import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    init();
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

  const createTodoList = () => {

    const row = document.createElement('div');
    row.classList.add('row');

    const col = document.createElement('div');
    col.classList.add('col');


    const todoTask = document.createElement('p');
    todoTask.classList.add('todoTask');
    todoTask.textContent="hello";
  
    row.appendChild(col);
    row.appendChild(todoTask);
  
    return row;
  }


  const init = () => {
    let container = document.getElementById('container');
    container.appendChild(createTodoList());
  }
