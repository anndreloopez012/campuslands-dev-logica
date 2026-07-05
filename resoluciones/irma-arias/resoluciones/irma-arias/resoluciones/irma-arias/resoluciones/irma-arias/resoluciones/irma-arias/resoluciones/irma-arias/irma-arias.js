
/**
 * Ejercicio 011: Organización de listas - Kickboxing
 * Autor: Irma Yaneht Arias García
 */

const peleadores = [
    { nombre: "Juan", peso: 60 },
    { nombre: "Pedro", peso: 95 },
    { nombre: "Luis", peso: 75 }
];

function organizarPeleadores(lista) {
    return lista.map(p => {
        let categoria = "";
        if (p.peso < 65) categoria = "Peso Pluma";
        else if (p.peso < 85) categoria = "Peso Medio";
        else categoria = "Peso Pesado";
        return { ...p, categoria };
    });
}

console.log("Peleadores organizados:");
console.table(organizarPeleadores(peleadores));