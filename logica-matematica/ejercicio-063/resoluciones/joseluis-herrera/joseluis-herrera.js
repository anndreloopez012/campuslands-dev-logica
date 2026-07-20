function calcularMétricasDesempeño(partidas) {
    let suma = 0;
    for (let i = 0; i < partidas.length; i++) {
        suma += partidas[i];
    }
    let promedio = suma / partidas.length;

    let ordenadas = [...partidas].sort((a, b) => a - b);
    let mitad = Math.floor(ordenadas.length / 2);
    let mediana = ordenadas.length % 2 !== 0 
        ? ordenadas[mitad] 
        : (ordenadas[mitad - 1] + ordenadas[mitad]) / 2;

    if (promedio > 1500 && mediana > 1400) {
        return "Nivel: Profesional (Desempeño consistente)";
    } else if (promedio > 1000) {
        return "Nivel: Avanzado (Buen promedio, estabilidad media)";
    } else {
        return "Nivel: Intermedio (Requiere mayor consistencia)";
    }
}

const registroJugador = [1200, 1800, 1500, 1400, 2000];
const diagnostico = calcularMétricasDesempeño(registroJugador);

console.log(`Diagnóstico: ${diagnostico}`);