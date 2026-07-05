function evaluarReparacionesTaller(mecanicos, limiteMinimoHoras) {
    // 1. Identificar entradas y usar condicionales para validar
    if (!mecanicos || mecanicos.length === 0 || limiteMinimoHoras <= 0) return [];

    const BONO_EFICIENCIA = 5;
    const PENALIZACION_RETRASO = 2;
    const resultados = [];

    // 2. Cálculo numérico y razonamiento cuantitativo
    for (let i = 0; i < mecanicos.length; i++) {
        const mecanico = mecanicos[i];
        
        // Regla de negocio: Verificar el límite mínimo de horas productivas
        const cumpleMinimo = mecanico.horasTrabajadas >= limiteMinimoHoras;
        
        // Aplicar condicionales basados en el rendimiento numérico
        let puntuacionFinal = mecanico.puntuacionBase;
        if (cumpleMinimo) {
            puntuacionFinal += BONO_EFICIENCIA;
        } else {
            puntuacionFinal -= PENALIZACION_RETRASO;
        }

        // Definir clasificación cuantitativa final
        const clasificacion = puntuacionFinal >= 85 ? "Excelente" : "Regular";

        resultados.push({
            nombre: mecanico.nombre,
            horasTrabajadas: mecanico.horasTrabajadas,
            puntuacionFinal: puntuacionFinal,
            clasificacion: clasificacion
        });
    }

    // 3. Definir salidas
    return resultados;
}

// === PROBAR CASOS ===
const mecanicosDelMes = [
    { nombre: "Carlos", horasTrabajadas: 45, puntuacionBase: 82 }, // Cumple mínimo -> 82 + 5 = 87 (Excelente)
    { nombre: "Ana", horasTrabajadas: 38, puntuacionBase: 86 }     // No cumple mínimo -> 86 - 2 = 84 (Regular)
];

console.log("--- Caso Normal ---");
console.log(evaluarReparacionesTaller(mecanicosDelMes, 40));

console.log("\n--- Caso Borde (Datos vacíos o límite inválido) ---");
console.log(evaluarReparacionesTaller([], 40));