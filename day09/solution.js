/* 

Los elfos están jugando con un tren 🚂 mágico que transporta regalos. 
Este tren se mueve en un tablero representado por un array de strings.

El tren está compuesto por una locomotora (@), seguida de sus vagones (o), 
y debe recoger frutas mágicas (*) que le sirve de combustible. El movimiento 
del tren sigue las siguientes reglas:

Recibirás dos parámetros board y mov.

board es un array de strings que representa el tablero:

- @ es la locomotora del tren.
- o son los vagones del tren.
- * es una fruta mágica.
- · son espacios vacíos.

mov es un string que indica el próximo movimiento del tren desde la cabeza del 
tren @:

- 'L': izquierda
- 'R': derecha
- 'U': arriba
- 'D': abajo.

Con esta información, debes devolver una cadena de texto:

- 'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
- 'eat': Si el tren recoge una fruta mágica (*).
- 'none': Si avanza sin chocar ni recoger ninguna fruta mágica.

*/

function moveTrain(board, mov) {

  //Buscamos la posición de la locomotora @
  let headRow, headCol;

  for (let row = 0; row < board.length; row++) {
    const col = board[row].indexOf('@');
    if (col !== -1) {
      headRow = row;
      headCol = col;
      break;
    }
  }

  //Cálculo de la nueva posición según el tipo de movimiento
  let newCol = headCol;
  let newRow = headRow;

  if (mov === 'L') {
    newCol--;
  } else if (mov === 'R') {
    newCol++
  } else if (mov === 'U') {
    newRow--
  } else if (mov == 'D') {
    newRow++
  };

  //Verificación de que el movimiento es válido
  if (newRow < 0 || newRow >= board.length || newCol < 0 || newCol >= board[0].length) {
    return 'crash';
  } 

  //Verificamos si la nueva posición es válida o se choca contra un vagón
  const newCell = board[newRow][newCol];

  if (newCell === 'o') {
    return 'crash'
  } else if (newCell === '*') {
    return 'eat'
  } else if (newCell === '·') {
    return 'none';
  }
}

module.exports = moveTrain;