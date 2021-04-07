import _ from 'lodash';
import './style.css';

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.desc = description;
    this.date = dueDate;
    this.priority = priority;
    this.check = false;
  }
}

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
  new Task('title3','description3','07 / 07 / 2007', 'high'),
];

const createTodoList = () => {
  let container = document.getElementById('container');
  container.innerHTML = '';
  const row = document.createElement('div');
  row.classList.add('row');

  const col = document.createElement('div');
  col.classList.add('col-12');

  let todoTask = document.createElement('ul');
  todoTask.classList.add('todoTask');

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

  
  container.appendChild(row);
}


const addTask = () => {
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

  const todo = new Task(title, description, dueDate, priority);
  tasks.push(todo);
  console.log(tasks);
  createTodoList();
  emptyInputs();
  closeModal();
}

const closeModal = () => {
  document.getElementById('close').click();
}

const init = () => {
  createTodoList();

  let create = document.getElementById('create');
  create.addEventListener('click', () => { addTask(); });

  let deleteid = document.getElementById('deleteid');
  deleteid.addEventListener('click', () => {deleteTask(id); });
}

init();

function emptyInputs() {
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
  document.getElementById('dueDate').value = '';
}

const deleteTask = (id) => {
  tasks.splice(id, 1);
  createTodoList();
}

// function readBook(id) {
//   myLibrary[id].read = !myLibrary[id].read;
//   listBooks();
// }