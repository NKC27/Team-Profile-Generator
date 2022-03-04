const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

describe('Employee Class detail', () => {
    it('creates an obj with properties', () => {
    const employee = new Employee(12345, 'Bob', 'mail@mail.com')

    expect(employee.id).toEqual(12345);
    expect(employee.name).toEqual('Bob');
    expect(employee.email).toEqual('mail@mail.com');
    });
});