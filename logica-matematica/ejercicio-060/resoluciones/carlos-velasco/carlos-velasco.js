const simularVentas = (clientesPorHora, precioPromedio, factorPropina) => {
    const totalClientes = clientesPorHora.reduce((acc, c) => acc + c, 0);
    const ventaBase = totalClientes * precioPromedio;
    const totalPropinas = ventaBase * factorPropina;
    const totalRecaudado = ventaBase + totalPropinas;

    let clasificacion = "En proceso";
    if (totalRecaudado > 1000) clasificacion = "Exitoso";
    else if (totalRecaudado > 500) clasificacion = "Rentable";

    return {
        total_recaudado: totalRecaudado.toFixed(2),
        clasificacion: clasificacion,
        explicacion: `Jornada con ${totalClientes} clientes. Venta base: $${ventaBase}, más propinas.`
    };
};

// Pruebas
console.log(simularVentas([10, 15, 20], 25, 0.10)); // Normal
console.log(simularVentas([1], 5, 0));              // Borde