// irma-arias.js - Ejercicio 056: Animación 3D (Presupuestos y descuentos)

// Función 1: Validar que los datos del presupuesto sean numéricos y válidos
function validarDatosPresupuesto(costoUnitario, cantidadLicencias) {
    if (
        typeof costoUnitario !== 'number' || 
        typeof cantidadLicencias !== 'number' ||
        costoUnitario <= 0 ||
        cantidadLicencias <= 0
    ) {
        return false;
    }
    return true;
}

// Función 2: Calcular el presupuesto aplicando descuentos escalonados según la cantidad
function calcularPresupuestoAnimacion(datosProyecto) {
    const { nombreProyecto, costoUnitario, cantidadLicencias } = datosProyecto;

    if (!validarDatosPresupuesto(costoUnitario, cantidadLicencias)) {
        return {
            estado: "Error",
            mensaje: "Datos de presupuesto inválidos. El costo unitario y la cantidad de licencias deben ser mayores a cero."
        };
    }

    const subtotal = costoUnitario * cantidadLicencias;
    let porcentajeDescuento = 0;

    // Reglas de descuento por volumen en proyectos de animación 3D
    if (cantidadLicencias >= 20) {
        porcentajeDescuento = 0.25; // 25% de descuento para estudios grandes
    } else if (cantidadLicencias >= 10) {
        porcentajeDescuento = 0.15; // 15% de descuento para estudios medianos
    } else if (cantidadLicencias >= 5) {
        porcentajeDescuento = 0.10; // 10% de descuento para pequeños equipos
    } else {
        porcentajeDescuento = 0.00; // Sin descuento
    }

    const valorDescuento = subtotal * porcentajeDescuento;
    const totalPagar = subtotal - valorDescuento;

    return {
        estado: "Exitoso",
        proyecto: nombreProyecto,
        unidadesLicencias: cantidadLicencias,
        subtotalBruto: Number(subtotal.toFixed(2)),
        porcentajeAplicado: `${porcentajeDescuento * 100}%`,
        descuentoTotal: Number(valorDescuento.toFixed(2)),
        totalFinalPagar: Number(totalPagar.toFixed(2)),
        explicacion: `Se aplicó la regla de presupuestos y descuentos escalonados según el volumen de licencias adquiridas para el estudio de animación 3D.`
    };
}

// --- Casos de prueba ---
// Caso Normal: 12 licencias de software 3D a un costo unitario de 150 dólares cada una (aplica 15% de descuento)
const pruebaNormal = {
    nombreProyecto: "Cortometraje Animado Blender",
    costoUnitario: 150,
    cantidadLicencias: 12
};

// Caso Borde: Cantidad de licencias con valor negativo para verificar el manejo de errores
const pruebaBorde = {
    nombreProyecto: "Proyecto Inválido",
    costoUnitario: 200,
    cantidadLicencias: -3
};

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(calcularPresupuestoAnimacion(pruebaNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(calcularPresupuestoAnimacion(pruebaBorde), null, 2));