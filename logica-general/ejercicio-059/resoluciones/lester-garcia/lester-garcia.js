const inventario = [
    { formula: "H2O", cantidad: 12, vencido: false },
    { formula: "NaCl", cantidad: 8, vencido: true },
    { formula: "H2SO4", cantidad: 0, vencido: false },
    { formula: "CO2", cantidad: 5, vencido: false }
];

let compuesto = "";
let motivo = "";

for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].cantidad === 0 || inventario[i].vencido) {
        compuesto = inventario[i].formula;

        if (inventario[i].cantidad === 0) {
            motivo = "El compuesto no tiene existencias.";
        } else {
            motivo = "El compuesto está vencido y debe reemplazarse.";
        }

        break;
    }
}

if (compuesto === "") {
    compuesto = "Inventario correcto";
    motivo = "Todos los compuestos tienen existencias y están vigentes.";
}

console.log("compuesto:", compuesto);
console.log("motivo:", motivo);