# Analisis del reto: Lectura de Instrucciones en Viajes y Turismo

## Analisis

- **Entrada:** Un arreglo de `pasajeros` (con atributos: nombre, destino, estatus_reserva) y una `instruccion_especial` (ej. 'priorizar confirmados').
- **Proceso:** Interpretar la instrucción recibida para organizar la lista de pasajeros antes de proceder con el check-in o el embarque.
- **Salida:** Una lista de `pasajeros_organizados` y la `accion_ejecutada` según la instrucción.

## Reglas identificadas

1. **Prioridad:** Si la instrucción es 'priorizar confirmados', colocar a todos los pasajeros con estatus 'confirmado' al inicio de la lista.
2. **Exclusión:** Si la instrucción es 'filtrar cancelados', eliminar del arreglo a todo pasajero cuyo estatus sea 'cancelado'.
3. **Validación:** Si no se reconoce la instrucción, devolver la lista original sin cambios y un mensaje de advertencia.

## Pruebas

### Caso normal

**Entrada:**
```javascript
pasajeros: [{nombre: "Ana", estatus: "pendiente"}, {nombre: "Luis", estatus: "confirmado"}],
instruccion: "priorizar confirmados"