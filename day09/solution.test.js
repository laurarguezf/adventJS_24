const moveTrain = require('./solution');

describe('Day 09 - El tren mágico', () => {
    test('1 - Debería devolver eat al encontrarse con *', () => {
        const board = [
            '·····',
            '*····',
            '@····',
            'o····',
            'o····'
        ];
        const mov = 'U';

        result = moveTrain(board, mov);
        expect(result).toEqual('eat');
    })

    test('2 - Debería devolver crash al encontrarse con o', () => {
        const board = [
            '·····',
            '*····',
            '@····',
            'o····',
            'o····'
        ];
        const mov = 'D';

        result = moveTrain(board, mov);
        expect(result).toEqual('crash');
    })

    test('3 - Debería devolver crash al encontrarse con la pared', () => {
        const board = [
            '·····',
            '*····',
            '@····',
            'o····',
            'o····'
        ];
        const mov = 'L';

        result = moveTrain(board, mov);
        expect(result).toEqual('crash');
    })

    test('4 - Debería devolver none al encontrarse con ·', () => {
        const board = [
            '·····',
            '*····',
            '@····',
            'o····',
            'o····'
        ];
        const mov = 'R';

        result = moveTrain(board, mov);
        expect(result).toEqual('none');
    })
})