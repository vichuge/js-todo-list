import _ from 'lodash';
import './style.css';

import Task from './Task.js';
import Project from './Project.js';

import lists from './list.js';
import funcs from './modal.js';

const init = () => {
  const projects = [];
  const project = new Project();
  projects.push(project);
  project.addElement(new Task('title1','description1','05 / 05 / 2005', 'high'));
  project.addElement(new Task('title2','description2','06 / 06 / 2006', 'low'));
  //console.log(project);
  lists.createTodoList(project);
  let createTask = document.getElementById('createTask');
  createTask.addEventListener('click', () => { funcs.addTask(project); });

  let createProject = document.getElementById('createProject');
  createProject.addEventListener('click', () => { funcs.addProject(projects) });

  funcs.buildModal();
}




init();
