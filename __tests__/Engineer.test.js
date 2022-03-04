const Engineer = require('../lib/Employee')

describe('Engineer Class detail', () => {
    describe('Init', () => {
        it('creates an object with name & ID', () => {
            const engineer = new Engineer(12345, 'Bob')

            expect(engineer.id).toEqual(12345);
            expect(engineer.name).toEqual('Bob');
        });
    });
});