
/**
 * Ejercicio 021: Operaciones Aritméticas Controladas
 * Lógica: El bono se duplica si el nivel de habilidad es superior a 20.
 * La penalización se reduce a la mitad si el jugador tiene "escudo" (booleano).
 */

function calcularPuntajeCompetitivo(puntajes, bono, penalizacion, nivelHabilidad, tieneEscudo) {
    if (puntajes.length === 0) return "Lista vacía";

    let suma = 0;
    for (let p of puntajes) {
        suma += p;
    }

    let promedio = suma / puntajes.length;

    // Lógica de control
    let bonoAplicado = (nivelHabilidad > 20) ? bono * 2 : bono;
    let penalizacionAplicada = (tieneEscudo) ? penalizacion / 2 : penalizacion;

    let puntajeFinal = Math.round(promedio + bonoAplicado - penalizacionAplicada);

    return {
        puntaje_final: puntajeFinal,
        explicacion: `Promedio: ${promedio.toFixed(2)}, Bono aplicado: ${bonoAplicado}, Penalización aplicada: ${penalizacionAplicada}`
    };
}

// Pruebas
console.log(calcularPuntajeCompetitivo([12, 18, 25, 30], 8, 3, 25, true)); 
// Caso borde: Habilidad baja y sin escudo
console.log(calcularPuntajeCompetitivo([10, 10], 5, 4, 10, false));