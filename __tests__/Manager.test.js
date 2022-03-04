const Manager = require('../lib/manager')

describe('Manager Class detail', () => {
    it('creates an obj with properties', () => {
    const manager = new Manager(12345, 'Bob')

    expect(manager.id).toEqual(12345);
    expect(manager.name).toEqual('Bob');
    
    });
});