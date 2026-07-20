// Ejercicio 049 - Módulos y divisibilidad (Películas de Miedo)

function programarMaratonTerror(cantidadPeliculas) {
    if (typeof cantidadPeliculas !== "number" || cantidadPeliculas <= 0) {
        return { error: "La cantidad de películas debe ser un número entero positivo." };
    }

    const cartelera = [];
    const resumen = {
        estandar: 0,
        jumpscares: 0,
        slashers: 0,
        medianoche: 0
    };

    for (let i = 1; i <= cantidadPeliculas; i++) {
        let categoria = "";

        if (i % 3 === 0 && i % 5 === 0) {
            categoria = "Estreno de Medianoche";
            resumen.medianoche++;
        } else if (i % 3 === 0) {
            categoria = "Especial de Jumpscares";
            resumen.jumpscares++;
        } else if (i % 5 === 0) {
            categoria = "Clásico Slasher";
            resumen.slashers++;
        } else {
            categoria = "Terror Estándar";
            resumen.estandar++;
        }

        cartelera.push({
            turno: i,
            tipo_funcion: categoria
        });
    }

    return {
        total_programado: cantidadPeliculas,
        desglose: resumen,
        cartelera: cartelera
    };
}

// Pruebas

console.log("--- Caso Normal (Maratón de 15 películas) ---");
console.log(programarMaratonTerror(15));

console.log("\n--- Caso Borde (Maratón corto, sin coincidencias múltiples) ---");
console.log(programarMaratonTerror(4));