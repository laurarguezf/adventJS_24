const compile = require('./solution');

describe('Day 10 - Elfos programadores', () => {
    test('1 - Devuelve el valor del último registro', () => {
        const instructions = [
            'MOV -1 C', // copia -1 al registro 'C',
            'INC C', // incrementa el valor del registro 'C'
            'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
            'MOV C A', // copia el registro 'C' al registro 'a',
            'INC A' // incrementa el valor del registro 'a'
        ];

        const result = compile(instructions);

        expect(result).toBe(2);
    })
})