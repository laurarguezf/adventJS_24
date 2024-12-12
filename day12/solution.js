/*

Estás en un mercado muy especial en el que se venden árboles de Navidad 🎄. 
Cada uno viene decorado con una serie de adornos muy peculiares, y el precio 
del árbol se determina en función de los adornos que tiene.

- *: Copo de nieve - Valor: 1
- o: Bola de Navidad - Valor: 5
- ^: Arbolito decorativo - Valor: 10
- #: Guirnalda brillante - Valor: 50
- @: Estrella polar - Valor: 100

Normalmente se sumarían todos los valores de los adornos y ya está…

Pero, ¡ojo! Si un adorno se encuentra inmediatamente a la izquierda de otro 
de mayor valor, en lugar de sumar, se resta su valor.

*/

function calculatePrice(ornaments) {

  // Establecemos los valores a cada decoración
  const values = {
    '*': 1,
    'o': 5,
    '^': 10,
    '#': 50,
    '@': 100
  }

  //Inicializamos el cálculo del total
  let total = 0;
  
  //Recorremos el string d elas decoraciones
  for (let i = 0; i < ornaments.length; i++) {
    const actual = values[ornaments[i]]; //Valor de la decoración actual
    const next = values[ornaments[i + 1]]; //Valor de la decoración inmediatamente posterior a la actual

    //Cheequeamos la validez de la decoración
    if (!(ornaments[i] in values)) {
        return undefined; 
    }
    
    //Lógica para establecer si se suma o se resta el valor de la decoración actual (en función del valor de la siguiente)
    if (next > actual) {
      total -= actual;
    } else {
      total += actual;
    } 
  }

  return total;
}

module.exports = calculatePrice;