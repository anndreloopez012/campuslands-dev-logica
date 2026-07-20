function diagnosticarTatuajes(solicitudes) {
    const errores = [];

    for (let i = 0; i < solicitudes.length; i++) {
        const solicitud = solicitudes[i];

        if (
            solicitud.nombre === "" ||
            solicitud.edad < 18 ||
            solicitud.diseno === ""
        ) {
            errores.push({
                cliente: solicitud.nombre || "Sin nombre",
                error: "Solicitud con datos inválidos"
            });
        }
    }

    return errores;
}

// Ejemplo
const solicitudes = [
    { nombre: "Laura", edad: 25, diseno: "Dragón" },
    { nombre: "", edad: 22, diseno: "Rosa" },
    { nombre: "Carlos", edad: 16, diseno: "Lobo" },
    { nombre: "Ana", edad: 28, diseno: "" }
];

console.log(diagnosticarTatuajes(solicitudes));