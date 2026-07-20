/**
 * EJERCICIO 13: Algoritmo de Luhn
 *
 * Dada una secuencia de dígitos, esta función valida si es correcta
 * según el Algoritmo de Luhn (fórmula de módulo 10).
 *
 * @param {string|number} numero - El número a validar.
 * @returns {boolean} Devuelve `true` si el número es válido, `false` en caso contrario.
 */
function validarLuhn(numero) {
  const digitos = String(numero).split('').map(Number);
  let suma = 0;
  let esSegundoDigito = false;

  // Iteramos de derecha a izquierda.
  for (let i = digitos.length - 1; i >= 0; i--) {
    let digito = digitos[i];

    if (esSegundoDigito) {
      digito *= 2;
      if (digito > 9) {
        digito -= 9;
      }
    }

    suma += digito;
    esSegundoDigito = !esSegundoDigito;
  }

  // El número es válido si la suma total es un múltiplo de 10.
  return suma % 10 === 0;
}

// --- BLOQUE DE PRUEBAS ---
console.log("--- Iniciando Pruebas del Algoritmo de Luhn (Ejercicio 13) ---");

// Prueba 1: Un número de tarjeta de crédito válido.
const valido = '49927398716';
console.log(`\nPrueba 1 ('${valido}' es válido?):`, validarLuhn(valido)); // Esperado: true

// Prueba 2: Un número de tarjeta de crédito inválido.
const invalido = '49927398717';
console.log(`\nPrueba 2 ('${invalido}' es válido?):`, validarLuhn(invalido)); // Esperado: false

// Prueba 3: Otro número válido.
const valido2 = '79927398713';
console.log(`\nPrueba 3 ('${valido2}' es válido?):`, validarLuhn(valido2)); // Esperado: true

console.log("\n--- Pruebas Finalizadas ---");