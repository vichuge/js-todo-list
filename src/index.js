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
  const date = '2006-12-01';
  project.addElement(new Task('title1','description1', date, 'High'));
  project.addElement(new Task('title2','description2','2007-02-27', 'Low'));
  project2.addElement(new Task('title3','description3','2008-05-26', 'Medium'));
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

}

export default allProjectsFunc;

init();