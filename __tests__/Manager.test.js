const Manager = require('../lib/Manager')

describe('Manager Class detail', () => {
    describe('Init', () => {
        it('Creates an object with properties id and name', () => {
            const manager = new Manager(123, 'Bob')

            expect(manager.id).toEqual(123);
            expect(manager.name).toEqual('Bob');
        });
    });
});