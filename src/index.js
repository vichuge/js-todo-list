import _ from 'lodash';
import './style.css';

import Task from './Task';
import Project from './Project';
import AllProjects from './AllProjects';

import lists from './list';
import funcs from './modal';

const init = () => {
  const project = new Project();
  const allProjects = new AllProjects();
  allProjects.addElement(project);
  project.addElement(new Task('title1','description1','05 / 05 / 2005', 'high'));
  project.addElement(new Task('title2','description2','06 / 06 / 2006', 'low'));
  lists.createTodoList(project,allProjects.list);
  lists.createProjectsList(allProjects.list);
  let createTask = document.getElementById('createTask');
  createTask.addEventListener('click', () => { funcs.addTask(project, allProjects.list); });

  let createProject = document.getElementById('createProject');
  createProject.addEventListener('click', () => { funcs.addProject(project, allProjects.list) });

  funcs.buildModal();
}

init();
