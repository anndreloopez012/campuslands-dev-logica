function compararRaquetas(raqueta1, raqueta2) {

    if (!raqueta1 || !raqueta2) return "Datos incompletos.";
    if (raqueta1.control === raqueta2.control) {
        if (raqueta1.velocidad > raqueta2.velocidad) {
            return { mejor: raqueta1.nombre, motivo: "Empate en control, mayor velocidad." };
        } else if (raqueta2.velocidad > raqueta1.velocidad) {
            return { mejor: raqueta2.nombre, motivo: "Empate en control, mayor velocidad." };
        } else {
            return { mejor: "Indefinido", motivo: "Ambas tienen estadísticas iguales." };
        }
    }
    return raqueta1.control > raqueta2.control 
        ? { mejor: raqueta1.nombre, motivo: "Mayor control." }
        : { mejor: raqueta2.nombre, motivo: "Mayor control." };
}

const r1 = { nombre: "Butterfly", control: 8, velocidad: 7 };
const r2 = { nombre: "Stiga", control: 8, velocidad: 9 };

console.log(compararRaquetas(r1, r2));