const decodeFilename = require('./solution');

describe('Day 11 - DecodeFilename', () => {
    test('1 - Debería devolver el nombre del archivo y su extensión', () => {
        const filename = '2023122512345678_sleighDesign.png.grinchwa';

        result = decodeFilename(filename);

        expect(result).toEqual('sleighDesign.png');
    })

    test('2 - Debería devolver el nombre del archivo y su extensión', () => {
        const filename = '42_chimney_dimensions.pdf.hack2023';

        result = decodeFilename(filename);

        expect(result).toEqual('chimney_dimensions.pdf');
    })

    test('3 - Debería devolver el nombre del archivo y su extensión', () => {
        const filename = '987654321_elf-roster.csv.tempfile';

        result = decodeFilename(filename);

        expect(result).toEqual('elf-roster.csv');
    })
})