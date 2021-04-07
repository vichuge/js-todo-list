import _ from 'lodash';
import './style.css';

import Task from './Task.js';
import Project from './Project.js';

import createTodoList from './list.js';
import { addTask, buildModal } from './modal.js';

const projects = [];

const init = () => {
  const project = new Project();
  projects.push(project);
  project.addElement(new Task('title1','description1','05 / 05 / 2005', 'high'));
  project.addElement(new Task('title2','description2','06 / 06 / 2006', 'low'));
  //console.log(project);
  createTodoList(project);
  let create = document.getElementById('create');
  create.addEventListener('click', () => { addTask(project); });
  buildModal();
}

init();
