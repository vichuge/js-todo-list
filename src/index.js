import _ from 'lodash';
import './style.css';

import Task from './Task';
import Project from './Project';
import AllProjects from './AllProjects';

import lists from './list';
import funcs from './modal';

const localProjects = JSON.parse(localStorage.getItem('myProjects'));
const allProjects = new AllProjects();

const allProjectsFunc = () => {
  return allProjects;
}

if (localProjects != null) {
  for (let i = 0; i < localProjects.list.length; i += 1) {
    const elem = new Project(localProjects.list[i].title, localProjects.list[i].description);
    allProjects.addElement(elem);
    for (let j = 0; j < localProjects.list[i].list.length; j += 1) {
      const obj = localProjects.list[i].list[j];
      const task = new Task(obj.title, obj.desc, obj.date, obj.priority, obj.check);
      elem.addElement(task);
    }
  }
}

const init = () => {
  lists.createTodoList();
  lists.createProjectsList();

  const modal = document.getElementById('modal');
  modal.appendChild(funcs.buildModal());
  const modal2 = document.getElementById('modal2');
  modal2.appendChild(funcs.editModal());

  let createTask = document.getElementById('createTask');
  createTask.addEventListener('click', () => { funcs.addTask(allProjects); });

  let createProject = document.getElementById('createProject');
  createProject.addEventListener('click', () => { funcs.addProject(allProjects) });

  let clearAll = document.getElementById('clearAll');
  clearAll.addEventListener('click', () => {
    localStorage.removeItem('myProjects');
    location.reload();
  });

}

export default allProjectsFunc;

init();