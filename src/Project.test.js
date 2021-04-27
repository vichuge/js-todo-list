import Task from './Task';
import Project from './Project';

test('Show a tasks list on project', () => {
  const a = new Project('project title test', 'project title desc');
  expect(a.list).toEqual([]);
});

test('Insert a task in project', () => {
  const a = new Project('project title test', 'project title desc');
  const b = new Task('task title test', 'task desc test', '01/01/2001', 'high', false);
  a.addElement(b);
  expect(a.list).toEqual([{
    check: false, date: '01/01/2001', desc: 'task desc test', priority: 'high', title: 'task title test',
  }]);
});

test('Delete a task in project', () => {
  const a = new Project('project title test', 'project title desc');
  const b = new Task('task title test', 'task desc test', '01/01/2001', 'high', false);
  a.addElement(b);
  a.deleteElement(b.title);
  expect(a.list).toEqual([]);
});

test('Show the project name', () => {
  const a = new Project('project title test', 'project title desc');
  expect(a.title).toEqual('project title test');
});

test('Show the project desc', () => {
  const a = new Project('project title test', 'project title desc');
  expect(a.description).toEqual('project title desc');
});