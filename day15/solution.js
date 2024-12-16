/*

Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de 
administración de regalos y niños.

Para mejorar la presentación, quiere crear una función drawTable que reciba un array de 
objetos y lo convierta en una tabla de texto.

La tabla dibujada debe representar los datos del objeto de la siguiente manera:

- Tiene una cabecera con el nombre de la columna.
- El nombre de la columna pone la primera letra en mayúscula.
- Cada fila debe contener los valores de los objetos en el orden correspondiente.
- Cada valor debe estar alineado a la izquierda.
- Los campos dejan siempre un espacio a la izquierda.
- Los campos dejan a la derecha el espacio necesario para alinear la caja.

*/

function drawTable(data) {
  if (data.length === 0) return '';

  // Obtener los encabezados y calcular el ancho máximo de cada columna
  const headers = Object.keys(data[0]);
  const columnWidths = headers.map(header => {
    return Math.max(
      header.length, 
      ...data.map(row => String(row[header]).length)
    );
  });

  // Crear una función para generar una fila
  const createRow = (values) => {
    return '| ' + values.map((value, i) => String(value).padEnd(columnWidths[i])).join(' | ') + ' |';
  };

  // Crear las filas de encabezado y separadores
  const headerRow = createRow(headers.map(header => header[0].toUpperCase() + header.slice(1)));
  const separatorRow = '+-' + columnWidths.map(width => '-'.repeat(width)).join('-+-') + '-+';

  // Crear las filas de datos
  const dataRows = data.map(row => createRow(headers.map(header => row[header])));

  // Combinar todo
  return [separatorRow, headerRow, separatorRow, ...dataRows, separatorRow].join('\n');
}

module.exports = drawTable;