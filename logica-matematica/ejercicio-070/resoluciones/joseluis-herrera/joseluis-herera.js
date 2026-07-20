const presupuestoUSD = 1550.75;
const tasaCambio = 7.82; 
const comisionAgencia = 0.05; 

function calcularPresupuestoFinal(montoUSD) {
    console.log("--- Reporte de Cotización Turística ---");


    let montoLocal = montoUSD * tasaCambio;

    let totalConComision = montoLocal * (1 + comisionAgencia);

    let totalFinal = Math.round(totalConComision);

    console.log(`Presupuesto base (USD): $${montoUSD}`);
    console.log(`Conversión a moneda local: Q${montoLocal.toFixed(2)}`);
    console.log(`Total con comisión (sin redondear): Q${totalConComision.toFixed(2)}`);
    console.log(`Total a pagar (redondeado): Q${totalFinal}`);
}


calcularPresupuestoFinal(presupuestoUSD);