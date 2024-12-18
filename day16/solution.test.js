const removeSnow = require('./solution');

describe('Day 16 - removeSnow', () => {
    test('1 - Debería eliminar los caracteres continuos iguales', () => {
        const s = 'zxxzoz';
        const result = removeSnow(s);

        expect(result).toBe('oz');
    });

    test('2 - Debería eliminar los caracteres continuos iguales', () => {
        const s = 'abcdd';
        const result = removeSnow(s);

        expect(result).toBe('abc');
    });

    test('3 - Debería eliminar los caracteres continuos iguales', () => {
        const s = 'zzz';
        const result = removeSnow(s);

        expect(result).toBe('z');
    });

    test('4 - Debería eliminar los caracteres continuos iguales', () => {
        const s = 'a';
        const result = removeSnow(s);

        expect(result).toBe('a');
    });
});