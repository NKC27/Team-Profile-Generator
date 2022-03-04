const Intern = require('../lib/Intern')

describe('Intern Class detail', () => {
    describe('Init', () => {
        it('creates an object with properties id & name', () => {
            const intern = new Intern(12345, 'Bob')

            expect(intern.id).toEqual(12345);
            expect(intern.name).toEqual('Bob');
        });
    });
});