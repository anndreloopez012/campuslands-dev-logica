/**
 * Implementación del Patrón de Diseño Singleton.
 * La clase CajaRegistradora solo puede tener una instancia en toda la aplicación.
 */
class CajaRegistradora {
  // 1. La única instancia se guarda en una propiedad estática privada.
  static #instancia;

  // El saldo de la caja.
  #saldo;

  constructor() {
    // 2. Prevenir la creación de instancias con 'new' desde fuera.
    if (CajaRegistradora.#instancia) {
      throw new Error('Error: Use CajaRegistradora.getInstancia() para obtener el objeto.');
    }
    this.#saldo = 0;
    CajaRegistradora.#instancia = this;
  }

  /**
   * 3. Método estático que proporciona el punto de acceso global a la instancia.
   * @returns {CajaRegistradora} La única instancia de la caja registradora.
   */
  static getInstancia() {
    if (!CajaRegistradora.#instancia) {
      CajaRegistradora.#instancia = new CajaRegistradora();
    }
    return CajaRegistradora.#instancia;
  }

  agregarDinero(monto) {
    this.#saldo += monto;
    console.log(`[INFO] Se agregaron $${monto}. Saldo actual: $${this.#saldo}`);
  }

  obtenerSaldo() {
    return this.#saldo;
  }
}

// --- Casos de prueba ---

console.log('--- Probando el Patrón Singleton ---');

// Prueba 1: Obtener dos instancias y verificar que son el mismo objeto.
const caja1 = CajaRegistradora.getInstancia();
const caja2 = CajaRegistradora.getInstancia();
console.log('¿Las dos instancias son el mismo objeto?', caja1 === caja2); // Debería ser true

// Prueba 2: Modificar el saldo a través de una "instancia" y verificarlo en la otra.
caja1.agregarDinero(100);
console.log('Saldo obtenido desde caja2:', caja2.obtenerSaldo()); // Debería ser 100