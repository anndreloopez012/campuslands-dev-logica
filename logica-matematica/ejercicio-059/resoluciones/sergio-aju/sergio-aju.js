function calcularPesoMolecular(pesos, pureza, margen) {
    if (pesos.length === 0) return { peso_molecular_final: 0, clasificacion_calidad: "inestable" };
    
    const suma = pesos.reduce((acc, val) => acc + val, 0);
    const final = (suma * pureza) - margen;
    
    let categoria = "";
    if (final >= 500) categoria = "alta pureza";
    else if (final >= 200) categoria = "estándar";
    else categoria = "inestable";
    
    return { peso_molecular_final: final, clasificacion_calidad: categoria };
}