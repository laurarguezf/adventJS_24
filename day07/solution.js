/*

¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre 
ha montado. Ha cambiado el orden de algunos paquetes, por lo que los 
envíos no se pueden realizar.

Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch 
para desordenarlos. Nos ha escrito las reglas que debemos seguir para 
reordenar los paquetes. Las instrucciones que siguen son:

Recibirás un string que contiene letras y paréntesis.
Cada vez que encuentres un par de paréntesis, debes voltear el contenido 
dentro de ellos.
Si hay paréntesis anidados, resuelve primero los más internos.
Devuelve el string resultante con los paréntesis eliminados, pero con el 
contenido volteado correctamente.
Nos ha dejado algunos ejemplos:

fixPackages('a(cb)de')
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"

*/

function fixPackages(packages) {

    const packagesArray = packages.split(""); //Trasformamos el string en array usando de separación el espacio
    const bracketsIndex = []; //Para almacenar las posiciones de los paréntesis

    for (let i = 0; i < packagesArray.length ; i++) {
        if (packagesArray[i] === '(') {
            bracketsIndex.push(i); //Almacenamos la posición del paréntesis de apertura
        }
        else if (packagesArray[i] === ')') {
            const openBracketIndex = bracketsIndex.pop(); //Este es el índice del paréntesis de apertura
            const reverseContent = packagesArray.slice(openBracketIndex + 1, i).reverse(); //Aquí seleccionamos lo elementos en el interior de los brackets y los volteamos
            
            //Reemplazamos el contenido original con el contenido volteado
            //splice(4, 1, "dog") -> replaces 1 element at index 4 with "dog"
            packagesArray.splice(openBracketIndex, i - openBracketIndex + 1, ...reverseContent);

            i = openBracketIndex;
        }
    }

    return packagesArray.filter(letter => letter !== '(' && letter !== ')').join(''); //Aquí retornamos un string identificando las letras que sean distintas a ( y )
}

module.exports = fixPackages;