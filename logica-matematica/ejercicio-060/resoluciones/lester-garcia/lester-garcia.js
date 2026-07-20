let clientes = 48;
let consumoPromedio = 14;
let costoIngredientes = 220;

let ingresoEstimado = clientes * consumoPromedio;
let ganancia = ingresoEstimado - costoIngredientes;

let categoria = "";

if (ganancia >= 400 && clientes >= 40) {
    categoria = "negocio exitoso";
} else if (ganancia >= 250) {
    categoria = "negocio rentable";
} else {
    categoria = "negocio en crecimiento";
}

let explicacion = "se simularon los ingresos y la ganancia del negocio utilizando una formula simple y se evaluo la cantidad de clientes.";

console.log("ingreso_estimado:", ingresoEstimado);
console.log("ganancia:", ganancia);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);