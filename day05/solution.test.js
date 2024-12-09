const organizeShoes = require('./solution');

describe ('Day05 - organizeShoes', () => {
    test('Debería emparejar correctamente', () => {
        const shoes = [
            { type: 'I', size: 38 },
            { type: 'R', size: 38 },
            { type: 'R', size: 42 },
            { type: 'I', size: 41 },
            { type: 'I', size: 42 }
        ];

        const result = organizeShoes(shoes);
        
        expect(result).toEqual([38, 42]);
    });

    test('Debería emparejar correctamente', () => {
        const shoes = [
            { type: 'I', size: 38 },
            { type: 'R', size: 38 },
            { type: 'R', size: 38 },
            { type: 'I', size: 38 },
            { type: 'I', size: 42 }
        ];

        const result = organizeShoes(shoes);
        
        expect(result).toEqual([38, 38]);
    });
})