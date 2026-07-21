/**
 * Implementación del Patrón de Diseño Factory.
 * Se utiliza para crear diferentes tipos de notificaciones sin exponer la lógica de creación.
 */

// 1. Definir una "interfaz" o clase base para los productos que la fábrica creará.
class Notificacion {
  constructor(destinatario, mensaje) {
    this.destinatario = destinatario;
    this.mensaje = mensaje;
  }

  enviar() {
    throw new Error('El método enviar() debe ser implementado por las subclases.');
  }
}

// 2. Crear las clases concretas que implementan la base.
class NotificacionSMS extends Notificacion {
  enviar() {
    console.log(`Enviando SMS a ${this.destinatario}: "${this.mensaje}"`);
    return true;
  }
}

class NotificacionEmail extends Notificacion {
  enviar() {
    console.log(`Enviando Email a ${this.destinatario}: "${this.mensaje}"`);
    return true;
  }
}

class NotificacionPush extends Notificacion {
  enviar() {
    console.log(`Enviando Notificación Push a ${this.destinatario}: "${this.mensaje}"`);
    return true;
  }
}

// 3. Crear la Fábrica (Factory).
class NotificacionFactory {
  /**
   * Crea una instancia de una notificación basada en el tipo.
   * @param {string} tipo El tipo de notificación ('sms', 'email', 'push').
   * @param {string} destinatario El receptor de la notificación.
   * @param {string} mensaje El contenido del mensaje.
   * @returns {Notificacion} Una instancia de la clase de notificación correspondiente.
   */
  static crearNotificacion(tipo, destinatario, mensaje) {
    if (tipo === 'sms') {
      return new NotificacionSMS(destinatario, mensaje);
    } else if (tipo === 'email') {
      return new NotificacionEmail(destinatario, mensaje);
    } else if (tipo === 'push') {
      return new NotificacionPush(destinatario, mensaje);
    }
    throw new Error(`Tipo de notificación "${tipo}" no es válido.`);
  }
}

// --- Casos de prueba ---
console.log('--- Probando el Patrón Factory ---');
const notificaciones = [
  NotificacionFactory.crearNotificacion('sms', '+123456789', 'Tu pedido está listo.'),
  NotificacionFactory.crearNotificacion('email', 'cliente@example.com', 'Gracias por tu compra.'),
  NotificacionFactory.crearNotificacion('push', 'user-device-token', '¡Nueva promoción disponible!'),
];

notificaciones.forEach(notificacion => notificacion.enviar());