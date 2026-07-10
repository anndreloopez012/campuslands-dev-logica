
# Ejercicio 029 - Módulos y Divisibilidad (Películas de Miedo)

## Análisis del Problema
Para gestionar proyecciones de cine, es vital saber si la cantidad de espectadores es divisible por la capacidad de la sala. El operador módulo permite identificar cuántas personas quedarían fuera de un grupo de distribución o si la ocupación es exacta.

## Reglas Aplicadas
1. **Divisibilidad:** Si `espectadores % capacidadSala === 0`, la distribución es perfecta (no quedan personas sin silla).
2. **Cálculo de Sobrantes:** El operador `%` nos indica cuántas personas sobran si no se llena la última sala.
3. **Cálculo de Salas:** `Math.ceil()` se utiliza para redondear hacia arriba, garantizando que todos tengan un espacio asignado.

## Ejecución
`node nombre-apellido.js`

## Pruebas Realizadas
1. **Caso Normal:** 100 espectadores en salas de 20. Resultado: 5 salas, 0 sobrantes (Divisible).
2. **Caso Borde:** 105 espectadores en salas de 20. Resultado: 6 salas, 5 sobrantes (No divisible).