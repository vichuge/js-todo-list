import Project from './Project';
import allProjectsFunc from './object';

test('list all projects', () => {
  const allProjects = allProjectsFunc();
  expect(allProjects.list).toEqual([]);
});

test('Add a project on Projects list', () => {
  const allProjects = allProjectsFunc();
  const elem = new Project('project test title', 'project test description');
  allProjects.addElement(elem);
  expect(allProjects).toEqual({ list: [{ description: 'project test description', list: [], title: 'project test title' }] });
});

test('Delete a project on Projects list', () => {
  const allProjects = allProjectsFunc();
  const elem = new Project('project test title', 'project test description');
  allProjects.deleteElement(elem.title);
  expect(allProjects.list).toEqual([]);
});