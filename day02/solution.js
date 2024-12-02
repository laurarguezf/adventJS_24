/*
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, 
pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar 
este marco mágico.

Reglas:

- Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
- Cada nombre debe estar en una línea, alineado a la izquierda.
- El marco está construido con * y tiene un borde de una línea de ancho.
- La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio 
a cada lado.
*/

function createFrame(names) {

    //Encontrar el nombre más largo dentro del array
    const longestName = Math.max(...names.map(name => name.length));

    //Ancho del marco
    const frameWidth = longestName + 2 + 2; //2 espacios más 2 anchos de marco

    //Línea superior e inferior del marco
    const upperLowerLine = '*'.repeat(frameWidth);

    //Demás líneas del marco
    const frameNames = names.map(name => {
        spacesAfterName = ' '.repeat(longestName - name.length);
        return `* ${name}${spacesAfterName} *`;
    });

    //Construir marco entero
    const frameWithNames = [upperLowerLine, ...frameNames, upperLowerLine].join('\n');
   
    return frameWithNames;   
};

module.exports = createFrame;