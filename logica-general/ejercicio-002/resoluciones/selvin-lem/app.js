// validador de datos para ranking de futbol sala
const ESTADOS_VALIDOS = ["aprobado", "pendiente", "bloqueado"];
const PRIORIDADES_VALIDAS = ["alta", "media", "baja"];

function validarDatos(items, prioridad, regla) {
  const errores = [];

  if (!Array.isArray(items) || items.length === 0) {
    errores.push("items debe ser un arreglo no vacio.");
  } else {
    items.forEach((item, i) => {
      if (!ESTADOS_VALIDOS.includes(item)) {
        errores.push(`item en posicion ${i} ("${item}") no es un estado valido.`);
      }
    });
  }

  if (!PRIORIDADES_VALIDAS.includes(prioridad)) {
    errores.push(`prioridad "${prioridad}" no es valida.`);
  }

  if (typeof regla !== "string" || regla.trim() === "") {
    errores.push("regla debe ser un texto no vacio.");
  }

  return {
    valido: errores.length === 0,
    errores,
    motivo: errores.length === 0
      ? "todos los datos cumplen las reglas de validacion."
      : "los datos no cumplen una o mas reglas de validacion.",
  };
}

// pruebas
console.log(validarDatos(["aprobado", "pendiente", "bloqueado"], "alta", "revisar bloqueados primero"));
// caso normal: { valido: true, errores: [], motivo: 'todos los datos cumplen las reglas de validacion.' }

console.log(validarDatos([], "media", ""));
// caso borde: { valido: false, errores: ['items debe ser un arreglo no vacio.', 'regla debe ser un texto no vacio.'], motivo: 'los datos no cumplen una o mas reglas de validacion.' }

console.log(validarDatos(["aprobado", "lesionado"], "urgente", "chequear"));
// caso borde: item y prioridad invalidos