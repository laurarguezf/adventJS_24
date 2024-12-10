const fixPackages = require('./solution')

describe('Day 07 - El ataque del Grinch', () => {
    test('1 - Debería devolver el string ordenado', () => {
        const initialString = 'a(cb)de';
        const result = fixPackages(initialString);

        expect(result).toBe('abcde');
    })

    test('2 - Debería devolver el string ordenado', () => {
        const initialString = 'a(bc(def)g)h';
        const result = fixPackages(initialString);

        expect(result).toBe('agdefcbh');
    })

    test('3 - Debería devolver el string ordenado', () => {
        const initialString = 'abc(def(gh)i)jk';
        const result = fixPackages(initialString);

        expect(result).toBe('abcighfedjk');
    })

    test('4 - Debería devolver el string ordenado', () => {
        const initialString = 'a(b(c))e';
        const result = fixPackages(initialString);

        expect(result).toBe('acbe');
    })
}) 