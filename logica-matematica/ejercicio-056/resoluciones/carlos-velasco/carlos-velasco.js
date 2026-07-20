const calcularPresupuestoAnimacion = (servicios, descuento, impuesto) => {
    let subtotal = servicios.reduce((acc, s) => acc + s.costo, 0);
    
    if (servicios.length > 3) {
        subtotal -= (subtotal * descuento);
    }
    
    const totalFinal = subtotal * (1 + impuesto);
    
    let categoria = "Básico";
    if (totalFinal > 1000) categoria = "Premium";
    else if (totalFinal > 500) categoria = "Estándar";
    
    return {
        costo_final: totalFinal.toFixed(2),
        clasificacion: categoria,
        explicacion: `Calculado con ${servicios.length} servicios, aplicando impuestos e incentivos por volumen.`
    };
};

console.log(calcularPresupuestoAnimacion([{costo: 300}, {costo: 200}, {costo: 300}, {costo: 300}], 0.10, 0.05));
console.log(calcularPresupuestoAnimacion([{costo: 100}], 0.10, 0.05));