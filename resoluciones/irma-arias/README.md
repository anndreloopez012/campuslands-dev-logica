# Resolución Ejercicio 022 - Validación de Ranking

## Pensamiento del problema
Para validar un ranking, primero debemos filtrar los datos corruptos. Apliqué reglas de validación en cascada: integridad (datos presentes), lógica (puntos no negativos) y consistencia (puntos vs partidos).

## Reglas aplicadas
1. **Integridad:** Todos los campos deben existir.
2. **Lógica:** No se permiten puntos negativos.
3. **Consistencia:** Un equipo no puede tener más de 3 puntos por partido jugado.

## Ejecución
`node nombre-apellido.js`

## Casos probados
1. Equipo con datos correctos.
2. Equipo con puntos inconsistentes (más puntos de los posibles según sus partidos).
