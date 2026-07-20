const diagnosticarCita = (cita) => {
    if (!cita.equipoEsterilizado) {
        return { accion: "Suspender", motivo: "Peligro: Equipo no estéril." };
    }
    if (!cita.insumosSuficientes) {
        return { accion: "Reprogramar", motivo: "Error: Falta material." };
    }
    if (!cita.clientePreparado) {
        return { accion: "Esperar", motivo: "Aviso: Cliente no preparado." };
    }
    
    return { accion: "Iniciar sesión", motivo: "Apta para proceder." };
};

// Pruebas
const citaNormal = { insumosSuficientes: true, clientePreparado: true, equipoEsterilizado: true };
const citaConError = { insumosSuficientes: false, clientePreparado: true, equipoEsterilizado: true };

console.log(diagnosticarCita(citaNormal));
console.log(diagnosticarCita(citaConError));