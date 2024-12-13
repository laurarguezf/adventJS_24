/*

Los elfos del Polo Norte han creado un robot 🤖 especial que ayuda a Papá Noel a distribuir 
regalos dentro de un gran almacén. El robot se mueve en un plano 2D y partimos desde el origen (0, 0).

Queremos saber si, tras ejecutar una serie de movimientos, el robot vuelve a estar justo donde empezó.

Las órdenes básicas del robot son:

- L: Mover hacia la izquierda
- R: Mover hacia la derecha
- U: Mover hacia arriba
- D: Mover hacia abajo

Pero también tiene ciertos modificadores para los movimientos:

- *: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
- !: El siguiente movimiento se invierte (ej: R!L se considera como RR)
- ?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)

Nota: Cuando el movimiento se invierte con ! se contabiliza el movimiento invertido y no el original. 
Por ejemplo, !U?U invierte el movimiento de U, por lo que contabiliza que se hizo el movimiento D pero 
no el U. Así !U?U se traduce como D?U y, por lo tanto, se haría el movimiento U final.

Debes devolver:

- true: si el robot vuelve a estar justo donde empezó
- [x, y]: si el robot no vuelve a estar justo donde empezó, devolver la posición donde se detuvo

*/

function isRobotBack(moves) {
  let x = 0, y = 0;
  let performed = new Set(); //conjunto para registrar los movimientos que el robot ya ha hecho
  
  let i = 0;
  while (i < moves.length) {
    let move = moves[i];
    
    // Si encontramos un modificador, tratamos el siguiente movimiento
    if (move === '*') {
      i++;
      move = moves[i];
      // Doble intensidad: realizar el movimiento dos veces
      if (move === 'R') {
        x += 2;
      } else if (move === 'L') {
        x -= 2;
      } else if (move === 'U') {
        y += 2;
      } else if (move === 'D') {
        y -= 2;
      }
      performed.add(move); // Registrar el movimiento como realizado
    } else if (move === '!') {
      i++;
      move = moves[i];
      // Invertir el movimiento
      if (move === 'R') {
        x -= 1;
      } else if (move === 'L') {
        x += 1;
      } else if (move === 'U') {
        y -= 1;
      } else if (move === 'D') {
        y += 1;
      }
      performed.add(move === 'R' ? 'L' : move === 'L' ? 'R' : move === 'U' ? 'D' : 'U'); // Registrar el movimiento invertido
    } else if (move === '?') {
      i++;
      move = moves[i];
      // Solo realizar el movimiento si no se ha hecho antes
      if (!performed.has(move)) {
        performed.add(move);
        if (move === 'R') {
          x += 1;
        } else if (move === 'L') {
          x -= 1;
        } else if (move === 'U') {
          y += 1;
        } else if (move === 'D') {
          y -= 1;
        }
      }
    } else {
      // Movimiento básico
      if (move === 'R') {
        x += 1;
      } else if (move === 'L') {
        x -= 1;
      } else if (move === 'U') {
        y += 1;
      } else if (move === 'D') {
        y -= 1;
      }
      performed.add(move); // Registrar el movimiento como realizado
    }
    
    i++;
  }
  
  // Devolver el resultado
  return (x === 0 && y === 0) ? true : [x, y];
}

module.exports = isRobotBack;