const prepareGifts = require('./solution');

describe('Day01 - prepareGifts' , () => {
    test('1 - Elimina duplicados y ordena de forma ascendente', () => {
        const gifts1 = [3, 1, 2, 3, 4, 2, 5];
        const preparedGifts1 = prepareGifts(gifts1);
        expect(preparedGifts1).toEqual([1, 2, 3, 4, 5]);
    });

    test('2 - Elimina duplicados y ordena de forma ascendente', () => {
        const gifts2 = [6, 5, 5, 5, 5]
        const preparedGifts2 = prepareGifts(gifts2)
        expect(preparedGifts2).toEqual([5, 6]);
    });

    test('3 - Elimina duplicados y ordena de forma ascendente', () => {
        const gifts3 = [];
        const preparedGifts3 = prepareGifts(gifts3)
        expect(preparedGifts3).toEqual([]);
    });
})