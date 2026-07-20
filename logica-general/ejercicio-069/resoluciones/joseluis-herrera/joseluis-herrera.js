const escenarios = [
    { nombre: "Sótano", nivelActividad: 0, estado: "Seguro" },
    { nombre: "Ático", nivelActividad: 8, estado: "Seguro" },
    { nombre: "Pasillo Oscuro", nivelActividad: 4, estado: "Seguro" }
];

function actualizarSistema(listaEscenarios) {
    console.log("--- Monitoreo de Escenarios de Miedo ---");

    listaEscenarios.forEach((escenario) => {
        if (escenario.nivelActividad >= 7) {
            escenario.estado = "Peligro";
        } else if (escenario.nivelActividad >= 3) {
            escenario.estado = "Alerta";
        } else {
            escenario.estado = "Seguro";
        }

        console.log(`Escenario: ${escenario.nombre} | Actividad: ${escenario.nivelActividad} | Estado Final: ${escenario.estado}`);
    });
}

actualizarSistema(escenarios);