const Intern = require('../lib/Intern')

describe('Intern Class detail', () => {
    it('creates an obj with properties', () => {
    const intern = new Intern(12345, 'Bob')

    expect(intern.id).toEqual(12345);
    expect(intern.name).toEqual('Bob');
    
    });
});