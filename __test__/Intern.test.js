const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Intern1');

    expect(typeof(intern)).toBe('object');
});

test("gets Intern's school", () => {
    const intern = new Intern('Intern1', '2', 'email', 'HighSchool');

    expect(intern.school).toBe('HighSchool');
});

test('getRole() returns Intern', () => {
    const intern = new Intern('Intern');

    expect(intern.getRole()).toBe('Intern');;
});