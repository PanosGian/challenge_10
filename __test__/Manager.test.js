const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('creates a manager object', () => {
    const manager = new Manager('Manager1');

    expect(typeof(manager)).toBe('object');
});

test('gets office number', () => {
    const manager = new Manager('Manager', '1', 'dalton@gmail.com', '5');

    expect(manager.getOfficeNumber()).toBe('5');
});

test('getRole() returns Manager', () => {
    const manager = new Manager('Manager');

    expect(manager.getRole()).toBe('Manager');
});