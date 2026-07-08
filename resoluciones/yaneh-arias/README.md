
# Ejercicio 011: Conteo combinatorio en Kickboxing

## Pensamiento del problema
Para organizar un torneo de kickboxing, es necesario saber cuántos combates únicos ocurrirán. Utilizo la fórmula combinatoria de $n$ elementos tomados de 2 en 2 para asegurar que cada luchador se enfrente a todos los demás una sola vez.

## Reglas aplicadas
1. **Fórmula:** $Enfrentamientos = \frac{n(n-1)}{2}$
2. **Validación:** Si hay menos de 2 luchadores, no hay combates posibles.

## Cómo ejecutar
Ejecuta: `node yaneh-arias.js`

## Casos de prueba
- **Normal:** `4 luchadores` -> 6 enfrentamientos posibles.
- **Caso Borde:** `2 luchadores` -> 1 enfrentamiento posible.