
# Resolución: Ejercicio 008 - Flujos paso a paso (Películas de Sci-Fi)

## Pensamiento lógico
He diseñado un flujo de "cascada" (waterfall). La lógica evalúa una condición a la vez, permitiendo que la película avance por los filtros solo si cumple con los requerimientos anteriores. Esto asegura que el estado final sea siempre coherente con los pasos previos.

## Reglas aplicadas
1. **Filtro de Presupuesto:** Control financiero inicial.
2. **Filtro de Calidad:** Control de calidad de audiencia.
3. **Flujo Secuencial:** No se evalúa el rating si el presupuesto ya requiere una revisión especial.

## Cómo ejecutar
Ejecuta el archivo directamente con Python:
`python irma.py`

## Casos probados
1. **Caso Normal:** Presupuesto 150M y rating 8.5 -> Resultado: lista para estreno.
2. **Caso Borde (Presupuesto):** Película de 300M -> Resultado: en revisión (no se evalúa el rating).
3. **Caso Borde (Calidad):** Película de 50M con rating 4.0 -> Resultado: en espera.