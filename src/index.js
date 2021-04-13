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
  const date = new Date();
  project.addElement(new Task('title1','description1', date, 'High'));
  project.addElement(new Task('title2','description2',new Date('06 / 06 / 2006'), 'Low'));
  project2.addElement(new Task('title3','description3',new Date('07 / 07 / 2007'), 'Medium'));
  lists.createTodoList();
  lists.createProjectsList(allProjects.list);

  const modal = document.getElementById('modal');
  modal.appendChild(funcs.buildModal());
  const modal2 = document.getElementById('modal2');
  modal2.appendChild(funcs.editModal());
  
  let createTask = document.getElementById('createTask');
  createTask.addEventListener('click', () => { funcs.addTask(allProjects.list); });

  let createProject = document.getElementById('createProject');
  createProject.addEventListener('click', () => { funcs.addProject(allProjects.list) });

  let updateTask = document.getElementById('updateTask');
  updateTask.addEventListener('click', () => { funcs.updateTask(); });
}

export default allProjectsFunc;

init();