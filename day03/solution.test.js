const organizeInventory = require("./solution");

describe("Day03 - organizeInventory", () => {
  test(`1 - Debería retornar un objeto donde las claves sean las categorías
        y los valores objetos con clave el nombre del juguete y el valor las
        cantidades totales de cada juguete en esa categoría`, () => {
    const inventory1 = [
      { name: "doll", quantity: 5, category: "toys" },
      { name: "car", quantity: 3, category: "toys" },
      { name: "ball", quantity: 2, category: "sports" },
      { name: "car", quantity: 2, category: "toys" },
      { name: "racket", quantity: 4, category: "sports" },
    ];

    const inventoryOrganized = organizeInventory(inventory1);

    expect(inventoryOrganized).toEqual({
      toys: {
        doll: 5,
        car: 5,
      },
      sports: {
        ball: 2,
        racket: 4,
      },
    });
  });

  test(`2`, () => {
    const inventory2 = [
      { name: "book", quantity: 10, category: "education" },
      { name: "book", quantity: 5, category: "education" },
      { name: "paint", quantity: 3, category: "art" },
    ];

    const inventoryOrganized = organizeInventory(inventory2);

    expect(inventoryOrganized).toEqual({
      education: {
        book: 15
      },
      art: {
        paint: 3,
      },
    });
  });

  test(`3 - Debería retornar un array vacío`, () => {
    const inventory3 = [];
    const inventoryOrganized = organizeInventory(inventory3);
    expect(inventoryOrganized).toEqual({});
  });
});
