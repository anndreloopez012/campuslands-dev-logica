function asignarTurno(soldadores, tipo_turno) {
    const configuracionTurnos = {
        "diurno": "Equipo básico",
        "nocturno": "Alta visibilidad y equipo básico",
        "especial": "Protección radiológica"
    };

    const equipo = configuracionTurnos[tipo_turno] || "Equipo estándar";
    
    return {
        turno_asignado: tipo_turno.charAt(0).toUpperCase() + tipo_turno.slice(1),
        equipo_de_seguridad: equipo,
        mensaje: soldadores.length > 0 ? "Asignación exitosa" : "No hay soldadores asignados al turno"
    };
}