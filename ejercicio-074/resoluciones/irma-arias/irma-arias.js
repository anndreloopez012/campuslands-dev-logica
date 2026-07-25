
// Función 1: Validar que los datos del reporte no estén vacíos
function validarReporteTatuaje(reporte) {
    if (!reporte || typeof reporte !== 'object' || Object.keys(reporte).length === 0) {
        return false;
    }
    return true;
}

// Función 2: Analizar síntomas críticos (Infección o rechazo grave)
function analizarSintomasCriticos(sintomas) {
    const sintomasGrave = ["fiebre", "pus", "enrojecimiento_extremo", "dolor_intenso"];
    let encontrados = sintomas.filter(s => sintomasGrave.includes(s.toLowerCase()));
    
    if (encontrados.length > 0) {
        return {
            alerta: "Alta",
            diagnostico: "Posible infección o reacción grave detectada.",
            accionRequerida: "Acudir al médico especialista de inmediato y suspender cualquier crema no recetada."
        };
    }
    return { alerta: "Normal", diagnostico: "Sin síntomas de riesgo crítico." };
}

// Función 3: Analizar problemas leves de cicatrización o hidratación
function analizarCicatrizacion(diasEvolucion, nivelHidratacion) {
    if (diasEvolucion <= 5 && nivelHidratacion < 3) {
        return {
            alerta: "Media",
            diagnostico: "Resequedad excesiva en la fase inicial de curación.",
            accionRequerida: "Aumentar el uso de crema recomendada y lavar con jabón neutro."
        };
    }
    return { alerta: "Normal", diagnostico: "Proceso de cicatrización estable." };
}

// Función principal que coordina el diagnóstico del caso
function diagnosticarProblemaTatuaje(reporte) {
    if (!validarReporteTatuaje(reporte)) {
        return {
            estado: "Error",
            mensaje: "No se proporcionó un reporte válido para realizar el diagnóstico."
        };
    }

    // Aplicar análisis modular de reglas
    const evaluacionCritica = analizarSintomasCriticos(reporte.sintomas || []);
    if (evaluacionCritica.alerta === "Alta") {
        return {
            cliente: reporte.nombreCliente,
            tipoDiagnostico: "Urgencia Médica",
            nivelAlerta: evaluacionCritica.alerta,
            detalle: evaluacionCritica.diagnostico,
            sugerencia: evaluacionCritica.accionRequerida
        };
    }

    const evaluacionCicatrizacion = analizarCicatrizacion(reporte.diasEvolucion, reporte.nivelHidratacion);
    if (evaluacionCicatrizacion.alerta === "Media") {
        return {
            cliente: reporte.nombreCliente,
            tipoDiagnostico: "Cuidado de Mantenimiento",
            nivelAlerta: evaluacionCicatrizacion.alerta,
            detalle: evaluacionCicatrizacion.diagnostico,
            sugerencia: evaluacionCicatrizacion.accionRequerida
        };
    }

    return {
        cliente: reporte.nombreCliente,
        tipoDiagnostico: "Saludable",
        nivelAlerta: "Baja",
        detalle: "El tatuaje evoluciona favorablemente sin anomalías.",
        sugerencia: "Continuar con los cuidados básicos de higiene."
    };
}

// --- Casos de prueba ---
const reporteNormal = {
    nombreCliente: "Camila Torres",
    diasEvolucion: 3,
    nivelHidratacion: 2,
    sintomas: ["resequedad", "leve_tirantez"]
};

const reporteBorde = {}; // Objeto vacío para comprobar el caso borde

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(diagnosticarProblemaTatuaje(reporteNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(diagnosticarProblemaTatuaje(reporteBorde), null, 2));