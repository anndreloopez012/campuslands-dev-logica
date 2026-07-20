let partidosJugados = 24;
let partidosGanados = 18;
let partidosEmpatados = 3;

let porcentajeVictorias = (partidosGanados / partidosJugados) * 100;

let categoria = "";

if (porcentajeVictorias >= 75 && partidosEmpatados <= 5) {
    categoria = "lider";
} else if (porcentajeVictorias >= 60) {
    categoria = "clasificado";
} else {
    categoria = "en competencia";
}

let explicacion = "se calculo el porcentaje de victorias y se evaluaron las condiciones de empates para determinar la categoria.";

console.log("porcentaje_victorias:", porcentajeVictorias);
console.log("categoria:", categoria);
console.log("explicacion:", explicacion);