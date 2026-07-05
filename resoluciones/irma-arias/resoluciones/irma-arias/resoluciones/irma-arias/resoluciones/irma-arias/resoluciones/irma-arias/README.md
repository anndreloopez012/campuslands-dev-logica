
## Entrega
- Nombre: Irma Yaneht Arias García
- Ejercicio: 010
- Area: logica-matematica / logica-general

## Checklist
- [x] Mi PR apunta a dev

## Pensamiento
Para este ejercicio, analicé las restricciones de un paquete de viaje (costo vs. presupuesto y disponibilidad de cupos). Apliqué una estructura de validación donde, si alguna condición falla, se detiene el proceso y se retorna el motivo.

## Reglas Aplicadas
1. Debe haber cupos disponibles (> 0).
2. El costo debe ser menor o igual al presupuesto del cliente.

## Cómo ejecutar
Ejecuta el archivo con: `node irma-arias.js`

## Casos de Prueba
- **Normal**: Paquete con cupos y presupuesto adecuado (Resultado: Reservado con éxito).
- **Caso Borde**: Paquete sin cupos (Resultado: No disponible).