import _ from 'lodash';
import './style.css';

const tasks = [
  {
    title: 'title1',
    desc: 'description1',
    date: '05 / 05 / 2005',
    priority: 'high',
    check: false,
  },
  {
    title: 'title2',
    desc: 'description2',
    date: '06 / 06 / 2006',
    priority: 'low',
    check: true,
  },
];

class TodoList {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}


const createTodoList = () => {
  const row = document.createElement('div');
  row.classList.add('row');

  const col = document.createElement('div');
  col.classList.add('col-12');

  let todoTask = document.createElement('ul');
  todoTask.classList.add('list-group');

  // document.getElementsByClassName('todoTask').innerHTML = '';
  // const d = document.getElementById('todoTask');

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
            onclick="deleteTask"
            class="btn btn-primary"
            type="button"
            value="Delete"
            id="deleteid"
          />
        </div>
      </div>
    </li>`;
  }).join('');

  //const del = document.getElementById('deleteid');
  //del.addEventListener('click', () => { deleteTask(); });
  row.appendChild(col, tasks);
  col.appendChild(todoTask);
  return row;
}

const init = () => {
  let container = document.getElementById('container');

  container.appendChild(createTodoList());

  let a = document.getElementById('test');
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.classList.add('btn-primary');
  btn.innerHTML = 'hi!';
  btn.addEventListener('click', () => { addTask(); });
  a.appendChild(btn);
}

const addTask = () => {
  console.log('yeey!');
}

const deleteTask = () => {
  console.log('delete');
}
init();



// function emptyInputs() {
//   document.getElementById('title').value = '';
//   document.getElementById('description').value = '';
//   document.getElementById('dueDate').value = '';
// }

// closeModal = () => {
//   document.getElementById('close').click();
// }

const addProject = () => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('dueDate').value;
  // const priority = document.getElementById('priority');

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
  

  const todo = new TodoList(title, description, dueDate);
  tasks.push(todo);
  console.log(tasks);
  // createTodoList();
  // emptyInputs();
  // closeModal();
}

// function deleteBook(id) {
//   myLibrary.splice(id, 1);
//   listBooks();
// }

// function readBook(id) {
//   myLibrary[id].read = !myLibrary[id].read;
//   listBooks();
// }