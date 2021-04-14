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
    //console.log(localProjects.list[i].title);
    allProjects.addElement(elem);
  }
}


const init = () => {
  lists.createTodoList();
  if (localProjects != null) {
    lists.createProjectsList(localProjects.list);
  }


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