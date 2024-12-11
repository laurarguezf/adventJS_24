/*

El Grinch ha hackeado 🏴‍☠️ los sistemas del taller de Santa Claus y ha codificado 
los nombres de todos los archivos importantes. Ahora los elfos no pueden encontrar 
los archivos originales y necesitan tu ayuda para descifrar los nombres.

Cada archivo sigue este formato:

- Comienza con un número (puede contener cualquier cantidad de dígitos).
- Luego tiene un guion bajo _.
- Continúa con un nombre de archivo y su extensión.
- Finaliza con una extensión extra al final (que no necesitamos).
- Ten en cuenta que el nombre de los archivos pueden contener letras (a-z, A-Z), números 
0-9), otros guiones bajos (_) y guiones (-).

Tu tarea es implementar una función que reciba un string con el nombre de un archivo 
codificado y devuelva solo la parte importante: el nombre del archivo y su extensión.

*/

function decodeFilename(filename) {
    const firstUnderscoreIndex = filename.indexOf('_'); //Busca el índice del primero guión bajo
    const firstDotIndex = filename.indexOf('.', firstUnderscoreIndex); //Busca el primer punto después del guión bajo

    if (firstDotIndex === -1 || firstUnderscoreIndex === -1) {
        return '';
    }

    return filename.substring(firstUnderscoreIndex + 1, filename.indexOf('.', firstDotIndex + 1));
}

module.exports = decodeFilename;