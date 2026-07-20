const menu = [
    { nombre: "Hamburguesa", disponible: true, vegetariano: false },
    { nombre: "Wrap Vegetal", disponible: false, vegetariano: true },
    { nombre: "Taco Vegano", disponible: true, vegetariano: true },
    { nombre: "Hot Dog", disponible: true, vegetariano: false }
];

let opcion = "";
let motivo = "";

for (let i = 0; i < menu.length; i++) {
    if (menu[i].disponible && menu[i].vegetariano) {
        opcion = menu[i].nombre;
        motivo = "Es la primera opción vegetariana disponible.";
        break;
    }
}

if (opcion === "") {
    opcion = "Sin opciones";
    motivo = "No existe un alimento que cumpla todas las condiciones.";
}

console.log("opcion:", opcion);
console.log("motivo:", motivo);