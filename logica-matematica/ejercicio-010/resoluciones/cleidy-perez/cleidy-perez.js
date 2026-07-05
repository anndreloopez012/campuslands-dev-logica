// Entradas
const participantes = [12, 18, 25, 30];
const bono = 8;
const penalizacion = 3;

// Validación
if (participantes.length === 0) {
    console.log("Error: la lista de participantes está vacía.");
} else {
    // Se toma el puntaje más alto
    const puntajeBase = Math.max(...participantes);

    // Se aplica la regla
    const puntajeFinal = Math.round(puntajeBase + bono - penalizacion);

    // Clasificación
    let clasificacion;

    if (puntajeFinal >= 25) {
        clasificacion = "competitivo";
    } else {
        clasificacion = "basico";
    }

    console.log("=== Caso de ejemplo ===");
    console.log("Puntaje final:", puntajeFinal);
    console.log("Clasificación:", clasificacion);
    console.log("Explicación: se sumó el bono y se restó la penalización según las reglas.");
}

// ------------------------
// Prueba propia
// ------------------------

const participantes2 = [10, 14, 19];
const bono2 = 5;
const penalizacion2 = 2;

const puntajeFinal2 = Math.round(Math.max(...participantes2) + bono2 - penalizacion2);

console.log("\n=== Prueba propia ===");
console.log("Puntaje final:", puntajeFinal2);
console.log("Clasificación:", puntajeFinal2 >= 25 ? "competitivo" : "basico");

// ------------------------
// Caso borde
// ------------------------

const participantes3 = [];

console.log("\n=== Caso borde ===");

if (participantes3.length === 0) {
    console.log("No es posible calcular el puntaje porque no hay participantes.");
}