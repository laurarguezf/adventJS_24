const calculatePrice = require('./solution');

describe('Day 12 - Calculateprice', () => {
    test('1 - Debería calcular el precio correcto del árbol', () => {
        const ornaments = '***';
        const price = calculatePrice(ornaments);

        expect(price).toBe(3);
    })

    test('2 - Debería calcular el precio correcto del árbol', () => {
        const ornaments = 'o*';
        const price = calculatePrice(ornaments);

        expect(price).toBe(6);
    })

    test('3 - Debería calcular el precio correcto del árbol', () => {
        const ornaments = '*o';
        const price = calculatePrice(ornaments);

        expect(price).toBe(4);
    })

    test('4 - Debería calcular el precio correcto del árbol', () => {
        const ornaments = '*o*';
        const price = calculatePrice(ornaments);

        expect(price).toBe(5);
    })

    test('5 - Debería calcular el precio correcto del árbol', () => {
        const ornaments = '**o*';
        const price = calculatePrice(ornaments);

        expect(price).toBe(6);
    })

    test('6 - Debería calcular el precio correcto del árbol', () => {
        const ornaments = 'o***';
        const price = calculatePrice(ornaments);

        expect(price).toBe(8);
    })

    test('7 - Debería calcular el precio correcto del árbol', () => {
        const ornaments = '*o@';
        const price = calculatePrice(ornaments);

        expect(price).toBe(94);
    })

    test('8 - Debería calcular el precio correcto del árbol', () => {
        const ornaments = '*#';
        const price = calculatePrice(ornaments);

        expect(price).toBe(49);
    })

    test('9 - Debería calcular el precio correcto del árbol', () => {
        const ornaments = '@@@';
        const price = calculatePrice(ornaments);

        expect(price).toBe(300);
    })

    test('10 - Debería calcular el precio correcto del árbol', () => {
        const ornaments = '#@';
        const price = calculatePrice(ornaments);

        expect(price).toBe(50);
    })

    test('11 - Debería calcular el precio correcto del árbol', () => {
        const ornaments = '#@Z';
        const price = calculatePrice(ornaments);

        expect(price).toBe(undefined);
    })

})