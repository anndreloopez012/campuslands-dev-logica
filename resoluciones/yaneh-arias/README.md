
# Ejercicio 007: Secuencias numéricas en listas de reproducción

## Pensamiento del problema
Para gestionar una lista de reproducción, es vital identificar si la secuencia de tiempos (tempos) sigue un orden lógico. Esto permite clasificar el flujo de la música como 'suave' (ascendente) o 'mixto'.

## Reglas aplicadas
1. **Validación:** Se recorre el arreglo comparando cada elemento con su sucesor.
2. **Lógica:** Si algún elemento es mayor o igual al siguiente, se rompe la condición de secuencia ascendente.

## Cómo ejecutar
Ejecuta: `node yaneh-arias.js`

## Casos de prueba
- **Normal:** `[60, 80, 100, 120]` -> Es ascendente: true.
- **Caso Borde:** `[120, 60, 80]` -> Es ascendente: false.