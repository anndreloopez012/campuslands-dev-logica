function gestionarWorkflow(proyectos, tipoDia) {
    if (proyectos.length === 0) return { accion: "Ninguna", razon: "No hay proyectos pendientes." };

    // Regla de negocio: filtrar según día
    let candidatos = proyectos.filter(p => tipoDia === "produccion" ? p.estado !== "bloqueado" : true);
    
    // Ordenar por urgencia (Alta primero)
    candidatos.sort((a, b) => (a.urgencia === "alta" ? -1 : 1));

    return {
        accion: candidatos[0].nombre,
        razon: `Día de ${tipoDia}: se prioriza ${candidatos[0].urgencia} urgencia.`
    };
}