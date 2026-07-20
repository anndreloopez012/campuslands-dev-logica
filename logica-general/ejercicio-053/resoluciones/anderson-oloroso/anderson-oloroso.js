function evaluarSaltos(saltos) {
    const resultados = [];

    for (let i = 0; i < saltos.length; i++) {
        const salto = saltos[i];
        let estado;

        if (salto.altura < 1000) {
            estado = "Altura insuficiente";
        } else if (!salto.paracaidasAbierto) {
            estado = "Emergencia";
        } else {
            estado = "Salto exitoso";
        }

        resultados.push({
            participante: salto.nombre,
            estado: estado
        });
    }

    return resultados;
}

// Ejemplo
const saltos = [
    { nombre: "Luis", altura: 3500, paracaidasAbierto: true },
    { nombre: "Ana", altura: 800, paracaidasAbierto: true },
    { nombre: "Carlos", altura: 3000, paracaidasAbierto: false }
];

console.log(evaluarSaltos(saltos));