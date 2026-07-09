
# Resolución: Ejercicio 003.1 - Toma de decisiones (Esports)

## Pensamiento lógico
Para este reto, organicé la lógica mediante una estructura de "filtros sucesivos". Primero elimino casos inválidos por causas externas (penalizaciones) y luego evalúo el rendimiento deportivo (puntos y partidas). Esto mantiene el código ordenado y fácil de leer.

## Reglas aplicadas
1. **Prioridad absoluta:** La penalización es una condición bloqueante.
2. **Validación de umbrales:** Se establecieron límites de 5 partidas y 10 puntos para la clasificación.

## Cómo ejecutar
Ejecuta el archivo directamente con Python:
`python irma.py`

## Casos probados
1. **Caso Normal:** Equipo con 12 puntos y 6 partidas (sin penalización) -> Clasificado.
2. **Caso Borde (Penalización):** Equipo con gran rendimiento pero penalizado -> Descalificado.
3. **Caso Borde (Bajo rendimiento):** Equipo con 5 puntos y 5 partidas -> Descalificado.