function calcularDisenoTatuaje(disenos) {
    const resultados = [];

    for (let i = 0; i < disenos.length; i++) {
        const diseno = disenos[i];

        const area = diseno.ancho * diseno.alto;
        const perimetro = 2 * (diseno.ancho + diseno.alto);

        resultados.push({
            nombre: diseno.nombre,
            area: area,
            perimetro: perimetro
        });
    }

    return resultados;
}

// Ejemplo
const tatuajes = [
    { nombre: "Dragón", ancho: 10, alto: 20 },
    { nombre: "Rosa", ancho: 8, alto: 15 },
    { nombre: "Fénix", ancho: 12, alto: 25 }
];

console.log(calcularDisenoTatuaje(tatuajes));