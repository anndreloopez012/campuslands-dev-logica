function calcularPrecioVenta(costos, margen, impuesto) {
    if (costos.length === 0) return { precio_venta_final: 0, clasificacion_precio: "económico" };
    
    const costoTotal = costos.reduce((acc, val) => acc + val, 0);
    const final = costoTotal + (costoTotal * margen) + impuesto;
    
    let categoria = "";
    if (final >= 20.0) categoria = "premium";
    else if (final >= 10.0) categoria = "estándar";
    else categoria = "económico";
    
    return { precio_venta_final: parseFloat(final.toFixed(2)), clasificacion_precio: categoria };
}