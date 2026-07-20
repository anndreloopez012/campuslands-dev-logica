let largo = 12;
let ancho = 8;

let area = largo * ancho;
let perimetro = 2 * (largo + ancho);

let categoria = "";

if (area >= 90) {
    categoria = "tatuaje grande";
} else {
    categoria = "tatuaje pequeno";
}

let explicacion = "se calcularon el area y el perimetro del diseño utilizando las dimensiones proporcionadas.";

console.log("area:", area);
console.log("perimetro:", perimetro);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);