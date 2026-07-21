
function evaluarSecuenciaMusical(duracionesCanciones, factorSecuencia, umbralMaximo) {
    // 1. Validar datos vacíos
    if (!duracionesCanciones || duracionesCanciones.length === 0) {
        return {
            secuencia_procesada: [],
            duracion_total: 0,
            estado_reproduccion: "error",
            explicacion: "La lista de reproducción está vacía."
        };
    }

    // 2. Aplicar reglas de secuencia numérica a cada duración de canción (Ciclos / Arreglos)
    let secuenciaProcesada = duracionesCanciones.map((duracion, indice) => {
        // Ejemplo de regla de secuencia: multiplicar por el factor y sumar el índice de la pista
        return (duracion * factorSecuencia) + indice;
    });

    // 3. Calcular acumulados y totales
    let duracionTotal = secuenciaProcesada.reduce((acumulador, valor) => acumulador + valor, 0);

    // 4. Evaluar condiciones especiales frente al umbral
    let estadoReproduccion = duracionTotal > umbralMaximo ? "excede límite de playlist" : "playlist óptima";

    // 5. Retornar el resultado estructurado
    return {
        secuencia_procesada: secuenciaProcesada,
        duracion_total: duracionTotal,
        estado_reproduccion: estadoReproduccion,
        explicacion: `Se procesó la secuencia musical obteniendo un total de ${duracionTotal} minutos, catalogada como ${estadoReproduccion}.`
    };
}

// --- CASOS DE PRUEBA ---

// Caso Normal (Lista estándar de canciones en minutos)
const pruebaNormal = evaluarSecuenciaMusical([3, 4, 5, 2], 1.5, 30);
console.log("Resultado Caso Normal:", pruebaNormal);

// Caso Borde (Lista con un solo elemento o valores muy bajos)
const pruebaBorde = evaluarSecuenciaMusical([2], 1.0, 5);
console.log("Resultado Caso Borde:", pruebaBorde);