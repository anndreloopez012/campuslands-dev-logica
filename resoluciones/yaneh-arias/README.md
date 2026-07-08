
# Ejercicio 010: Redondeo y precisión en viajes

## Pensamiento del problema
En el sector turismo, la precisión monetaria es crítica. He implementado lógica para separar el valor preciso para transacciones (2 decimales) del valor entero útil para reportes ejecutivos.

## Reglas aplicadas
1. **Precisión:** Uso de `toFixed(2)` para limitar la salida financiera.
2. **Redondeo:** Uso de `Math.round()` para obtener el valor entero más cercano.
3. **Validación:** Se previene la división por cero si no hay turistas.

## Cómo ejecutar
Ejecuta: `node yaneh-arias.js`

## Casos de prueba
- **Normal:** `1500.75 / 3` -> Preciso: 500.25, Redondeado: 500.
- **Caso Borde:** `10 / 1` -> Preciso: 10, Redondeado: 10.