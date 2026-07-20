function calcularFacturaTurismo(costos, tasa) {
    if (costos.length === 0) return { total_facturado: 0, moneda_aplicada: "USD" };
    
    const subtotal = costos.reduce((acc, val) => acc + val, 0);
    const totalConImpuesto = subtotal * (1 + tasa);
    
    // Redondeo comercial a 2 decimales
    const totalRedondeado = Math.round(totalConImpuesto * 100) / 100;
    
    return { 
        total_facturado: totalRedondeado, 
        moneda_aplicada: "USD" 
    };
}