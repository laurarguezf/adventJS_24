const drawTable = require('./solution');

describe('Day 15 - Draw table', () => {
    test('1 - Debería dibujar la tabla correctamente', () => {
        const data = [
            { name: 'Alice', city: 'London' },
            { name: 'Bob', city: 'Paris' },
            { name: 'Charlie', city: 'New York' }
        ];

        const result = drawTable(data);

        expect(result).toEqual(`+---------+----------+
| Name    | City     |
+---------+----------+
| Alice   | London   |
| Bob     | Paris    |
| Charlie | New York |
+---------+----------+`);
    });
});