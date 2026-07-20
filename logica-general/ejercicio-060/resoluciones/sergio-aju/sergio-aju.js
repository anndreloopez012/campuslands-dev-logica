function definirEstrategia(platos, presupuesto) {
    const demandaAlta = platos.filter(p => p.demanda === 'alta').length;
    const demandaBaja = platos.filter(p => p.demanda === 'baja').length;

    if (demandaBaja >= platos.length / 2) {
        return { estrategia: "reestructuración de oferta", motivo: "baja demanda general" };
    }
    if (demandaAlta >= platos.length / 2) {
        return { estrategia: "expansión de menú", motivo: "alta demanda sostenida" };
    }
    
    return presupuesto > 300 
        ? { estrategia: "campaña de fidelización", motivo: "presupuesto alto con demanda media" }
        : { estrategia: "ofertas flash", motivo: "presupuesto ajustado con demanda media" };
}