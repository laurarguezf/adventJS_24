/*
Los elfos están trabajando arduamente para limpiar los caminos llenos de nieve mágica ❄️. 
Esta nieve tiene una propiedad especial: si dos montículos de nieve idénticos y adyacentes 
se encuentran, desaparecen automáticamente.

Tu tarea es escribir una función que ayude a los elfos a simular este proceso. El camino 
se representa por una cadena de texto y cada montículo de nieve un carácter.

Tienes que eliminar todos los montículos de nieve adyacentes que sean iguales hasta que no 
queden más movimientos posibles.
*/

function removeSnow(s) {
  let snowArray = s.split(''); //Convertimos la cadena de texto en un array

  for (let i = 0; i < snowArray.length - 1; i++){
    if (snowArray[i] === snowArray[i + 1]) {
      snowArray.splice(i, 2)
      i = -1; //Esto es para reiniciar el bucle y verificar la cadena de texto desde el principio
    }
  }

  return snowArray.join('');
}

module.exports = removeSnow;