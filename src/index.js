import _ from 'lodash';
import './style.css';

import Task from './Task';
import Project from './Project';
import AllProjects from './AllProjects';

import lists from './list';
import funcs from './modal';

const allProjects = new AllProjects();

const allProjectsFunc = () => {
  return allProjects;
}

const init = () => {
  const project = new Project('project number 1', 'description of project number 1');
  const project2 = new Project('project number 2', 'description of project number 2');
  allProjects.addElement(project);
  allProjects.addElement(project2);
  project.addElement(new Task('title1','description1','05 / 05 / 2005', 'high'));
  project.addElement(new Task('title2','description2','06 / 06 / 2006', 'low'));
  project2.addElement(new Task('title3','description3','07 / 07 / 2007', 'medium'));
  lists.createTodoList();
  lists.createProjectsList(allProjects.list);

  const modal2 = document.getElementById('modal2');
  modal2.appendChild(funcs.editModal());
  const modal = document.getElementById('modal');
  modal.appendChild(funcs.buildModal());



  let createTask = document.getElementById('createTask');
  createTask.addEventListener('click', () => { funcs.addTask(allProjects.list); });

  let createProject = document.getElementById('createProject');
  createProject.addEventListener('click', () => { funcs.addProject(allProjects.list) });

  let updateTask = document.getElementById('updateTask');
  updateTask.addEventListener('click', () => { funcs.updateTask(); });

  /*let openModal = document.getElementById('openModal');
  openModal.addEventListener('click', () => { console.log('hi')});*/
}

export default allProjectsFunc;

init();