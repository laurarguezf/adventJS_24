const isRobotBack = require('./solution');

describe('Day 13 - is robot back', () => {
    test('1 - Debería devolver true si x e y = 0, si no debería devolver su posición', () => {
        const moves = 'R';
        const robotPosition = isRobotBack(moves);

        expect(robotPosition).toEqual([1, 0])
    })

    test('2 - Debería devolver true si x e y = 0, si no debería devolver su posición', () => {
        const moves = 'RL';
        const robotPosition = isRobotBack(moves);

        expect(robotPosition).toBeTruthy();
    })

    test('3 - Debería devolver true si x e y = 0, si no debería devolver su posición', () => {
        const moves = 'RLUD';
        const robotPosition = isRobotBack(moves);

        expect(robotPosition).toBeTruthy();
    })

    test('4 - Debería devolver true si x e y = 0, si no debería devolver su posición', () => {
        const moves = '*RU';
        const robotPosition = isRobotBack(moves);

        expect(robotPosition).toEqual([2, 1]);
    })

    test('5 - Debería devolver true si x e y = 0, si no debería devolver su posición', () => {
        const moves = 'R*U';
        const robotPosition = isRobotBack(moves);

        expect(robotPosition).toEqual([1, 2]);
    })

    test('6 - Debería devolver true si x e y = 0, si no debería devolver su posición', () => {
        const moves = 'LLL!R';
        const robotPosition = isRobotBack(moves);

        expect(robotPosition).toEqual([-4, 0]);
    })

    test('7 - Debería devolver true si x e y = 0, si no debería devolver su posición', () => {
        const moves = 'R?R';
        const robotPosition = isRobotBack(moves);

        expect(robotPosition).toEqual([1, 0]);
    })

    test('8 - Debería devolver true si x e y = 0, si no debería devolver su posición', () => {
        const moves = 'U?D';
        const robotPosition = isRobotBack(moves);

        expect(robotPosition).toBeTruthy();
    })

    test('9 - Debería devolver true si x e y = 0, si no debería devolver su posición', () => {
        const moves = 'R!L';
        const robotPosition = isRobotBack(moves);

        expect(robotPosition).toEqual([2, 0]);
    })
})