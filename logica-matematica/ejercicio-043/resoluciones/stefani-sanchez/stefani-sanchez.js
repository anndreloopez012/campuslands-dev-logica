// Ejercicio 043 - Promedios y medianas

// Entradas
const participantes = [12, 18, 25, 30];
const bono = 8;
const penalizacion = 3;

function calcularResultado(participantes, bono, penalizacion) {

    if (!Array.isArray(participantes) || participantes.length === 0) {
        return {
            error: "La lista de participantes está vacía."
        };
    }

    let suma = 0;

    for (let i = 0; i < participantes.length; i++) {

        if (participantes[i] < 0) {
            return {
                error: "No se permiten valores negativos."
            };
        }

        suma += participantes[i];
    }

    // Promedio
    const promedio = suma / participantes.length;

    // Mediana
    const ordenados = [...participantes].sort((a, b) => a - b);

    let mediana;

    if (ordenados.length % 2 === 0) {
        const mitad = ordenados.length / 2;
        mediana = (ordenados[mitad - 1] + ordenados[mitad]) / 2;
    } else {
        mediana = ordenados[Math.floor(ordenados.length / 2)];
    }

    const puntajeFinal = Math.round(promedio + bono - penalizacion);

    let clasificacion;

    if (puntajeFinal >= 30) {
        clasificacion = "competitivo";
    } else if (puntajeFinal >= 20) {
        clasificacion = "intermedio";
    } else {
        clasificacion = "basico";
    }

    return {
        promedio,
        mediana,
        puntaje_final: puntajeFinal,
        clasificacion,
        explicacion: "Se calculó el promedio, la mediana y luego se aplicó el bono y la penalización."
    };
}

// Prueba normal
console.log("=== Prueba normal ===");
console.log(calcularResultado(participantes, bono, penalizacion));

// Caso borde
console.log("\n=== Caso borde ===");
console.log(calcularResultado([], bono, penalizacion));
