const drawRace = require("./solution");

describe("Day 08 - La carrera de renos", () => {
  test("1 - Debería dibujar correctamente la carrera con sus carriles", () => {
    const indices = [0, 5, -3];
    const length = 10;

    const result = drawRace(indices, length);

    expect(result).toEqual(`  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3`);
  });

  test("2 - Debería dibujar correctamente la carrera con sus carriles", () => {
    const indices = [2, -1, 0, 5];
    const length = 8;

    const result = drawRace(indices, length);

    expect(result).toEqual(`   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4`);
  });

  test("3 - Debería dibujar correctamente la carrera con sus carriles", () => {
    const indices = [3, 7, -2];
    const length = 12;

    const result = drawRace(indices, length);

    expect(result).toEqual(`  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3`);
  });
});
