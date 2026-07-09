
# Ejercicio 021 - Operaciones Aritméticas Controladas (Videojuegos)

## Análisis
Se procesa el puntaje de jugadores competitivos añadiendo reglas de control. El cálculo final no depende solo de la suma, sino del estado del jugador (habilidad y protecciones).

## Reglas Aplicadas
1. **Control de Bono:** Si `nivelHabilidad > 20`, el bono se multiplica por 2.
2. **Control de Penalización:** Si `tieneEscudo` es verdadero, la penalización se reduce al 50%.
3. **Redondeo:** Se utiliza `Math.round()` para asegurar un puntaje entero final.
4. **Acumulación:** Sumatoria simple de puntajes base antes de la normalización.

## Ejecución
`node nombre-apellido.js`

## Pruebas Realizadas
1. **Caso Normal (Alta habilidad/Escudo):** `[12, 18, 25, 30]`, bono 8, penal 3, nivel 25, escudo true.
2. **Caso Borde (Baja habilidad/Sin escudo):** `[10, 10]`, bono 5, penal 4, nivel 10, escudo false.