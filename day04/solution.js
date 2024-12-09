/*

¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. 
Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) 
y un carácter especial para decorarlo.

La función debe devolver un string que represente el árbol de Navidad, construido de la 
siguiente manera:

- El árbol está compuesto de triángulos de caracteres especiales.
- Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
- Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
- El árbol siempre debe tener la misma longitud por cada lado.
- Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.

*/

function createXmasTree(height, ornament) {
    
    //Comprobamos que la altura es un número válid
    if (height < 1 || height > 100) {
        return 'La altura debe de ser un entero entre 1 y 100'
    };

    let tree = '';

    for (let i = 0; i < height; i++) {
        const blankSpaces = '_'.repeat(height - 1 - i);
        const treeOrnament = ornament.repeat(2*i + 1);
        tree += blankSpaces + treeOrnament + blankSpaces + '\n';
    }

    const trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
    tree += trunk + '\n' + trunk;

    return tree;
}

module.exports = createXmasTree;