// ejercicio logica - organizacion de listas - Ejercicio 071

const organizarCategorias = (peleadores) => {
    const clasificados = {
        profesional: [],
        amateur: [],
        novato: []
    };

    peleadores.forEach(p => {
        if (p.peleas >= 20) clasificados.profesional.push(p.nombre);
        else if (p.peleas >= 5) clasificados.amateur.push(p.nombre);
        else clasificados.novato.push(p.nombre);
    });

    return clasificados;
};

const listaPeleadores = [
    { nombre: "Alex", peleas: 25 },
    { nombre: "Beto", peleas: 10 },
    { nombre: "Carlos", peleas: 2 }
];

console.log(organizarCategorias(listaPeleadores));
console.log(organizarCategorias([]));