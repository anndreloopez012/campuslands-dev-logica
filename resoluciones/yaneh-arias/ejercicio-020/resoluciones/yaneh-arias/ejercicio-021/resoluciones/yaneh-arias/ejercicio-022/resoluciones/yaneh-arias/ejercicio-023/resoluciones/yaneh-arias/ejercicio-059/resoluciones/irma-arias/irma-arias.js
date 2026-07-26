// irma-arias.js - Ejercicio 059: Fórmulas químicas (Validaciones numéricas)

// Función 1: Validar que un valor numérico cumpla con condiciones estequiométricas estrictas
function validarParametroQuimico(valor, nombreParametro) {
    if (typeof valor !== 'number' || isNaN(valor)) {
        return { valido: false, mensaje: `El parámetro '${nombreParametro}' debe ser un número válido.` };
    }
    if (valor <= 0) {
        return { valido: false, mensaje: `El parámetro '${nombreParametro}' (${valor}) no puede ser menor o igual a cero en una fórmula física/química.` };
    }
    if (valor > 10000) {
        return { valido: false, mensaje: `El parámetro '${nombreParametro}' (${valor}) excede el límite máximo permitido para cálculos estándar.` };
    }
    return { valido: true, mensaje: "Parámetro válido." };
}

// Función 2: Validar un compuesto químico completo (coeficientes y masas molares de reactivos y productos)
function validarCompuestoQuimico(datosCompuesto) {
    const { nombreCompuesto, coeficiente, masaMolar, valencia } = datosCompuesto;

    if (!nombreCompuesto || typeof nombreCompuesto !== 'string') {
        return {
            estado: "Error",
            mensaje: "El nombre del compuesto químico es obligatorio y debe ser texto."
        };
    }

    // Validar cada componente numérico aplicando las reglas estrictas
    const valCoeficiente = validarParametroQuimico(coeficiente, "coeficiente estequiométrico");
    if (!valCoeficiente.valido) return { estado: "Error de Validación", campo: "coeficiente", detalle: valCoeficiente.mensaje };

    const valMasa = validarParametroQuimico(masaMolar, "masa molar (g/mol)");
    if (!valMasa.valido) return { estado: "Error de Validación", campo: "masaMolar", detalle: valMasa.mensaje };

    const valValencia = validarParametroQuimico(valencia, "valencia atómica");
    if (!valValencia.valido) return { estado: "Error de Validación", campo: "valencia", detalle: valValencia.mensaje };

    // Cálculo verificado si todas las validaciones numéricas son correctas
    const masaTotalParcial = coeficiente * masaMolar;

    return {
        estado: "Exitoso",
        compuesto: nombreCompuesto,
        datosValidados: {
            coeficienteEstequiometrico: coeficiente,
            masaMolarGmol: masaMolar,
            valenciaAtomica: valencia
        },
        masaTotalCalculada: Number(masaTotalParcial.toFixed(2)),
        evaluacion: "Los datos numéricos cumplen con todas las reglas estequiométricas y de estabilidad.",
        explicacion: "Se aplicaron filtros estrictos de validación numérica para prevenir errores lógicos en el balanceo de fórmulas químicas."
    };
}

// --- Casos de prueba ---
// Caso Normal: Molécula de Ácido Sulfúrico (H2SO4) con datos válidos
const pruebaNormal = {
    nombreCompuesto: "Ácido Sulfúrico (H2SO4)",
    coeficiente: 2,
    masaMolar: 98.08,
    valencia: 6
};

// Caso Borde: Coeficiente estequiométrico negativo para comprobar el rechazo por validación numérica
const pruebaBorde = {
    nombreCompuesto: "Compuesto Anómalo",
    coeficiente: -1,
    masaMolar: 50.0,
    valencia: 2
};

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(validarCompuestoQuimico(pruebaNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(validarCompuestoQuimico(pruebaBorde), null, 2));