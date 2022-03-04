const Engineer = require('../lib/Engineer')

describe('Engineer Class detail', () => {
    it('creates an obj with properties', () => {
    const engineer = new Engineer(12345, 'Bob')

    expect(engineer.id).toEqual(12345);
    expect(engineer.name).toEqual('Bob');
    
    });
});