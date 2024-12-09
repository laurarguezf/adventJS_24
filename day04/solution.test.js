const createXmasTree = require('./solution');

describe('createXmasTree', () => {
    test('Debería de mostrar un árbol de altura 5 con tronco y * de ornamento', () => {
        const tree = createXmasTree(5, `*`);
        const expected = '____*____\n' +
            '___***___\n' +
            '__*****__\n' +
            '_*******_\n' +
            '*********\n' +
            '____#____\n' +
            '____#____';

        expect(tree).toBe(expected);
    })

    test('Debería de mostrar un árbol de altura 3 con tronco y + de ornamento', () => {
        const tree = createXmasTree(3, `+`);
        const expected = '__+__\n' +
            '_+++_\n' +
            '+++++\n' +
            '__#__\n' +
            '__#__';

        expect(tree).toBe(expected);
    })

    test('Devuelve mensaje de error si la altura está fuera del rango permitido', () => {
        const tree = createXmasTree(0, '*');
        const expected = 'La altura debe de ser un entero entre 1 y 100';
        
        expect(tree).toBe(expected);
    });
})