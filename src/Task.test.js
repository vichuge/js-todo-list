import Task from './Task';

test('Create a task', () => {
  const a = new Task('task title test', 'task desc test', '01/01/2001', 'high', false);
  expect(a).toEqual({
    check: false, date: '01/01/2001', desc: 'task desc test', priority: 'high', title: 'task title test',
  });
});

test('Check title task', () => {
  const a = new Task('task title test', 'task desc test', '01/01/2001', 'high', false);
  expect(a.title).toEqual('task title test');
});

test('Check task description', () => {
  const a = new Task('task title test', 'task desc test', '01/01/2001', 'high', false);
  expect(a.desc).toEqual('task desc test');
});

test('Check task date', () => {
  const a = new Task('task title test', 'task desc test', '01/01/2001', 'high', false);
  expect(a.date).toEqual('01/01/2001');
});

test('Check task priority', () => {
  const a = new Task('task title test', 'task desc test', '01/01/2001', 'high', false);
  expect(a.priority).toEqual('high');
});

test('Check task check false', () => {
  const a = new Task('task title test', 'task desc test', '01/01/2001', 'high', false);
  expect(a.check).toEqual(false);
});

test('Check task check true', () => {
  const a = new Task('task title test', 'task desc test', '01/01/2001', 'high', true);
  expect(a.check).toEqual(true);
});