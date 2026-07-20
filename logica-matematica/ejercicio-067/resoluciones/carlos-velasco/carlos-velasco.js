const analizarPlaylist = (duraciones, meta) => {
    let total = 0;
    let contador = 0;

    for (let i = 0; i < duraciones.length; i++) {
        total += duraciones[i];
        contador++;
        if (total >= meta) break;
    }

    return {
        canciones_reproducidas: contador,
        tiempo_total: total,
        estado: total >= meta ? "Meta alcanzada" : "Meta no alcanzada",
        explicacion: `Se acumularon ${total} minutos usando ${contador} canciones.`
    };
};

console.log(analizarPlaylist([3, 5, 2, 8, 4], 10));
console.log(analizarPlaylist([2, 1], 10));