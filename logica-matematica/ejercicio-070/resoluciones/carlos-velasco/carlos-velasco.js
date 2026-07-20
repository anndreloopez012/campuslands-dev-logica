const calcularPresupuestoViaje = (gastos, tasaCambio, impuestos) => {
    if (!gastos || gastos.length === 0) return { error: "No hay gastos" };

    const totalLocal = gastos.reduce((acc, gasto) => acc + gasto, 0);
    const totalConvertido = totalLocal * tasaCambio;
    const totalConImpuestos = totalConvertido * (1 + impuestos / 100);

    return {
        presupuesto_total: parseFloat(totalConImpuestos.toFixed(2)),
        moneda: "Extranjera",
        explicacion: `Total convertido y redondeado a 2 decimales aplicando ${impuestos}% de impuestos.`
    };
};

console.log(calcularPresupuestoViaje([100, 250, 50], 0.92, 15));
console.log(calcularPresupuestoViaje([10.55, 20.44], 1.1, 5));