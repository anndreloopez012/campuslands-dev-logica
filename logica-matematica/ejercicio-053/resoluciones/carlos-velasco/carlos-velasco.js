const calcularAterrizaje = (p, z, margen) => {
    const distancia = Math.sqrt(Math.pow(z.x - p.x, 2) + Math.pow(z.y - p.y, 2));
    
    let clasificacion = "Fuera de Zona";
    if (distancia <= margen) clasificacion = "Precisión Perfecta";
    else if (distancia <= (margen * 3)) clasificacion = "Zona Segura";

    return {
        distancia: distancia.toFixed(2),
        clasificacion: clasificacion,
        explicacion: `Aterrizaje a ${distancia.toFixed(2)} unidades del centro.`
    };
};

console.log(calcularAterrizaje({ x: 1, y: 1 }, { x: 2, y: 2 }, 2));
console.log(calcularAterrizaje({ x: 10, y: 10 }, { x: 0, y: 0 }, 2));