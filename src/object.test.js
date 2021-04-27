import allProjectsFunc from './object';

test ('create an object', () => {
    const allProjects = allProjectsFunc();
    expect(allProjects).toEqual({"list": []})
});