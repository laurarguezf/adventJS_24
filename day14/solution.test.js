const minMovesToStables = require('./solution');

describe('Day 14 - minMovesToStables', () => {
    test('1 - Debería devolver el número mínimo de movimientos', () => {
        const reindeer = [2, 6, 9];
        const stables = [3, 8, 5];

        const result = minMovesToStables(reindeer,stables);

        expect(result).toEqual(3);
    })

    test('2 - Debería devolver el número mínimo de movimientos', () => {
        const reindeer = [1, 1, 3];
        const stables = [1, 8, 4];

        const result = minMovesToStables(reindeer,stables);

        expect(result).toEqual(8);
    })
})