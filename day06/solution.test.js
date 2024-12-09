const inBox = require('./solution');

describe('Day 06 - ¿Regalo dentro de la caja?', () => {
    test('Debería comprobar que no hay * dentro de la caja', () => {
        const caja = [
            "#####",
            "#   #",
            "#   #",
            "#   #",
            "#####"
        ];

        const result = inBox(caja); 

        expect(result).toBe(false);
    })

    test('Debería comprobar que no hay * dentro de la caja', () => {
        const caja = [
            "#####",
            "#   #",
            "#  #*",
            "#####"
        ];

        const result = inBox(caja); 

        expect(result).toBe(false);
    })

    test('Debería comprobar que sí hay * dentro de la caja', () => {
        const caja = [
            "####",
            "#* #",
            "#  #",
            "####"
        ];

        const result = inBox(caja); 

        expect(result).toBe(true);
    })

    test('Debería comprobar que sí hay * dentro de la caja', () => {
        const caja = [
            "###",
            "#*#",
            "###"
        ];

        const result = inBox(caja); 

        expect(result).toBe(true);
    })
})