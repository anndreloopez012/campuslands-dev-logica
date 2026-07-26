/**
 * Ejercicio 063: Lógica matemática - Promedios y medianas (Torneo de Esports)
 * Alumna: Yaneh Arias
 */

function calcularTorneoEsports(puntajes, bono, penalizacion) {
    if (!puntajes || puntajes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "no válido",
            explicacion: "El arreglo de puntajes está vacío."
        };
    }

    let puntajesOrdenados = [...puntajes].sort((a, b) => a - b);
    let mitad = Math.floor(puntajesOrdenados.length / 2);
    let mediana = 0;
    if (puntajesOrdenados.length % 2 === 0) {
        mediana = (puntajesOrdenados[mitad - 1] + puntajesOrdenados[mitad]) / 2;
    } else {
        mediana = puntajesOrdenados[mitad];
    }

    let calculoFinal = mediana + bono - penalizacion;
    let puntajeFinal = Math.round(calculoFinal);

    let clasificacion = "";
    if (puntajeFinal > 25) {
        clasificacion = "elite";
    } else if (puntajeFinal >= 15) {
        clasificacion = "competitivo";
    } else {
        clasificacion = "novato";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: "Se calculó la mediana del torneo, se sumó el bono y se restó la penalización según las reglas."
    };
}

const pruebaNormal = calcularTorneoEsports([12, 18, 25, 30], 8, 3);
console.log("Resultado Prueba Normal:", pruebaNormal);

const pruebaBorde = calcularTorneoEsports([20], 5, 2);
console.log("Resultado Prueba Borde:", pruebaBorde);
