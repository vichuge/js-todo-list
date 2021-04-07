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
  new Task('title1','description1','05 / 05 / 2005', 'high'),
  new Task('title2','description2','06 / 06 / 2006', 'low'),
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

  todoTask.innerHTML += tasks.map((task, index) => {
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
    input1.type ='checkbox';

    const h5 = document.createElement('h5');
    h5.classList.add('mb-1');
    h5.innerText = task.title;

    const p = document.createElement('p');
    p.innerText = task.desc;

    const small = document.createElement('small');
    small.innerText = task.date;

    const input2 =document.createElement('input');
    input2.classList.add('btn');
    input2.classList.add('btn-primary');
    input2.type ='button';
    input2.id = 'deleteid';
    input2.value = 'Delete';
    input2.addEventListener('click', () => { deleteTask(index); });


    div2.appendChild(input1);
    div2.appendChild(h5);
    div2.appendChild(p);
    div2.appendChild(small);
    div2.appendChild(input2);
    div1.appendChild(div2);
    li.appendChild(div1);
    container.appendChild(li);
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

  //let deleteid = document.getElementById('deleteid');
  //deleteid.addEventListener('click', () => {deleteTask(id); });
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