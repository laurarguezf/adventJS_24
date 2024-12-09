/*

Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas 
desordenadas en el taller. Cada bota se describe por dos valores:

- type indica si es una bota izquierda (I) o derecha (R).
- size indica el tamaño de la bota.

Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño 
que tengan izquierda y derecha. Para ello, debes devolver una lista con los 
pares disponibles después de emparejar las botas.

¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo 
tamaño!

*/

function organizeShoes(shoes) {

    const pairs = {};

    shoes.forEach(boot => {
        const { type, size } = boot;
        if (!pairs[size]) {
            pairs[size] = { I: 0, R: 0 };
        }
        pairs[size][type] += 1;
    });

    const pairedSizes = [];

    for (const size in pairs) {
        const leftBoot = pairs[size].I;
        const rightBoot = pairs[size].R;

        const pairsCount = Math.min(leftBoot, rightBoot);

        for (let i = 0; i < pairsCount; i++){
            pairedSizes.push(Number(size));
        }
    };

    return pairedSizes;
}

module.exports = organizeShoes;