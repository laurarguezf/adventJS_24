const createFrame = require("./solution");

describe("Day02 - createFrame", () => {
  test("1 - Retorna los nombres encapsulados", () => {
    const names1 = createFrame(["midu", "madeval", "educalvolpz"]);
    expect(names1).toEqual(`***************
* midu        *
* madeval     *
* educalvolpz *
***************`);
  });

  test("2 - Retorna los nombres encapsulados", () => {
    const names2 = createFrame(["midu"]);
    expect(names2).toEqual(`********
* midu *
********`);
  });

  test("3 - Retorna los nombres encapsulados", () => {
    const names3 = createFrame(['a', 'bb', 'ccc']);
    expect(names3).toEqual(`*******
* a   *
* bb  *
* ccc *
*******`);
  });
});
