function analizarCalificaciones(calificaciones) {
    let mayor = calificaciones[0];
    let menor = calificaciones[0];
    let suma = 0;

    for (let i = 0; i < calificaciones.length; i++) {
        if (calificaciones[i] > mayor) {
            mayor = calificaciones[i];
        }

        if (calificaciones[i] < menor) {
            menor = calificaciones[i];
        }

        suma += calificaciones[i];
    }

    const promedio = suma / calificaciones.length;

    console.log("Calificaciones:", calificaciones);
    console.log("Mayor puntuación:", mayor);
    console.log("Menor puntuación:", menor);
    console.log("Promedio:", promedio.toFixed(2));
}

// Ejemplo
analizarCalificaciones([8, 9, 7, 10, 6, 9]);