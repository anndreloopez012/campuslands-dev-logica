function procesarInstruccionesViaje(destinos) {
    if (!destinos || destinos.length === 0) {
        return [];
    }


    const planesDeViaje = [];
    for (let i = 0; i < destinos.length; i++) {
        const lugar = destinos[i];


        let requisitoPaso = "Paso 1: Solo necesitas llevar tu Pasaporte vigente.";
        if (lugar.requiereVisa === true) {
            requisitoPaso = "Paso 1: ¡Ojo! Debes tramitar la Visa antes de viajar.";
        }
        let equipajePaso = "Paso 2: Empacar ropa ligera y protector solar.";
        if (lugar.clima.toLowerCase() === "frio") {
            equipajePaso = "Paso 2: Empacar abrigo pesado, guantes y bufanda.";
        }
        planesDeViaje.push({
            destino: lugar.nombre,
            documentos: requisitoPaso,
            maleta: equipajePaso
        });
    }
    return planesDeViaje;
}


// === PROBAR CASOS ===
const misDestinos = [
    { nombre: "París", requiereVisa: true, clima: "frio" },
    { nombre: "Cancún", requiereVisa: false, clima: "caliente" }
];


console.log("--- Caso Normal (Procesar Instrucciones de Viaje) ---");
console.log(procesarInstruccionesViaje(misDestinos));


console.log("\n--- Caso Borde (Lista Vacía) ---");
console.log(procesarInstruccionesViaje([]));

