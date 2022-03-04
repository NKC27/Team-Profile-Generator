const Employee = require('../lib/Employee')

describe('Employee Class detail', () => {
    describe('Init', () => {
        it('Creates an obj with properties id and name', () => {
            const employee = new Employee(12345, 'Bob')

            expect(employee.id).toEqual(12345);
            expect(employee.name).toEqual('Bob');
        });
    });
});
