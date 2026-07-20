const PALABRAS_CLAVE = ["bloqueado", "pendiente", "aprobado"];

function construirInventarioEstados(items) {
  const inventario = { bloqueado: 0, pendiente: 0, aprobado: 0 };
  for (const item of items) {
    if (inventario[item] !== undefined) inventario[item]++;
  }
  return inventario;
}

// fase 1b: organizar la instruccion extraida de la regla
function construirInstruccion(regla) {
  if (typeof regla !== "string" || regla.trim() === "") {
    return { valida: false, palabras: [], conector: null };
  }
  const reglaMinuscula = regla.toLowerCase();
  const palabras = PALABRAS_CLAVE.filter((p) => reglaMinuscula.includes(p));
  let conector = null;
  if (/\by\b/.test(reglaMinuscula)) conector = "y";
  else if (/\bo\b/.test(reglaMinuscula)) conector = "o";
  return { valida: palabras.length > 0, palabras, conector };
}

// fase 2: decidir cruzando los dos objetos ya organizados
function interpretarReglaOrganizado(items, prioridad, regla) {
  if (typeof regla !== "string" || regla.trim() === "") {
    return { inventarioEstados: null, instruccion: null, accionFinal: "sin accion", motivo: "la regla esta vacia o no es texto valido." };
  }

  const instruccion = construirInstruccion(regla);

  if (!instruccion.valida) {
    return { inventarioEstados: null, instruccion, accionFinal: "instruccion no reconocida", motivo: "la regla no menciona ningun estado conocido." };
  }

  if (!Array.isArray(items) || items.length === 0) {
    return { inventarioEstados: null, instruccion, accionFinal: "sin datos", motivo: "la instruccion se organizo pero no hay items para aplicarla." };
  }

  const inventarioEstados = construirInventarioEstados(items);

  if (instruccion.palabras.length >= 2 && instruccion.conector === "y") {
    const todosPresentes = instruccion.palabras.every((p) => inventarioEstados[p] > 0);
    return {
      inventarioEstados,
      instruccion,
      accionFinal: todosPresentes ? `aplicar sobre estados combinados: ${instruccion.palabras.join(" y ")}` : "instruccion incumplida",
      motivo: todosPresentes
        ? "el inventario confirma que todos los estados exigidos por 'y' estan presentes."
        : "el conector 'y' exige todos los estados, pero el inventario muestra que falta al menos uno.",
    };
  }

  const presentes = instruccion.palabras.filter((p) => inventarioEstados[p] > 0);
  return {
    inventarioEstados,
    instruccion,
    accionFinal: presentes.length > 0 ? `aplicar sobre estado(s) presente(s): ${presentes.join(", ")}` : "ningun estado mencionado esta presente segun el inventario",
    motivo: instruccion.palabras.length >= 2
      ? "conector 'o' (o implicito): el inventario confirma que basta con uno de los estados presentes."
      : `la instruccion organizada pide enfocarse en "${instruccion.palabras[0]}", confirmado en el inventario.`,
  };
}

// pruebas
console.log(interpretarReglaOrganizado(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));

console.log(interpretarReglaOrganizado(["aprobado", "pendiente"], "alta", ""));

console.log(interpretarReglaOrganizado(["aprobado", "pendiente"], "media", "revisar bloqueado y pendiente"));

console.log(interpretarReglaOrganizado(["pendiente"], "media", "revisar bloqueado o pendiente"));