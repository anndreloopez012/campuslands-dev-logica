let atomosCarbono = 6;
let atomosHidrogeno = 12;
let atomosOxigeno = 6;

let totalAtomos = atomosCarbono + atomosHidrogeno + atomosOxigeno;

let formulaValida = atomosCarbono > 0 && atomosHidrogeno > 0 && atomosOxigeno > 0;

let clasificacion = "";

if (formulaValida && totalAtomos >= 20) {
    clasificacion = "compuesto estable";
} else if (formulaValida) {
    clasificacion = "compuesto valido";
} else {
    clasificacion = "compuesto invalido";
}

let explicacion = "se verifico que todos los atomos fueran mayores que cero y se evaluo el total de atomos para clasificar la formula.";

console.log("total_atomos:", totalAtomos);
console.log("formula_valida:", formulaValida);
console.log("clasificacion:", clasificacion);
console.log("explicacion:", explicacion);