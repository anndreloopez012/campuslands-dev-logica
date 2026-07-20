// Ejercicio 041: Operaciones Aritméticas Controladas - Videojuegos Competitivos

function calcularDanoCompetitivo(poderAtaque, defensaOponente, multiplicadorCombo, estadoObjetivo) {
    if (poderAtaque < 0 || defensaOponente < 0 || multiplicadorCombo < 1) {
        return {
            dano_final: 0,
            clasificacion_golpe: "error de calculo",
            explicacion: "Los valores de ataque y defensa no pueden ser negativos. El multiplicador base es 1."
        };
    }

    let danoBase = poderAtaque - defensaOponente;

    if (danoBase < 0) {
        danoBase = 0;
    }

    let danoTotal = danoBase * multiplicadorCombo;

    if (estadoObjetivo === "vulnerable") {
        danoTotal = danoTotal * 1.5;
    } else if (estadoObjetivo === "escudo_magico") {
        danoTotal = danoTotal * 0.5;
    } else if (estadoObjetivo === "invulnerable") {
        danoTotal = 0;
    }

    const danoFinalRedondeado = Math.round(danoTotal);

    let clasificacion = "";
    if (danoFinalRedondeado === 0) {
        clasificacion = "golpe nulo o bloqueado";
    } else if (danoFinalRedondeado >= 1000) {
        clasificacion = "golpe devastador";
    } else if (danoFinalRedondeado >= 500) {
        clasificacion = "golpe critico";
    } else {
        clasificacion = "golpe estandar";
    }

    return {
        dano_final: danoFinalRedondeado,
        clasificacion_golpe: clasificacion,
        explicacion: `Ataque de ${poderAtaque} vs Defensa de ${defensaOponente}. Con multiplicador x${multiplicadorCombo} y estado '${estadoObjetivo}', el dano final es ${danoFinalRedondeado}.`
    };
}

// Pruebas
console.log("=== Caso Normal ===");
const resultadoNormal = calcularDanoCompetitivo(850, 200, 1.2, "normal");
console.log(resultadoNormal);

console.log("\n=== Caso Borde ===");
const resultadoBorde = calcularDanoCompetitivo(150, 300, 1.0, "normal");
console.log(resultadoBorde);