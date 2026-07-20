# Analisis del reto: Patrones de Puntuación en Películas de Ciencia Ficción

## Analisis

- **Entrada:** Un arreglo de `calificaciones` (puntuaciones de críticos, de 1 a 10) y un `factor_ajuste` (valor extra para películas de culto).
- **Proceso:** Calcular la puntuación ponderada, aplicando el factor de ajuste si la película tiene un patrón específico de buenas críticas (ej. más del 50% de las notas son >= 8), y clasificar la obra.
- **Salida:** La `puntuacion_final` y la `clasificacion_calidad` (Obra Maestra, Recomendada, Culto, Regular).

## Reglas identificadas

1. **Promedio Base:** Calcular el promedio simple de todas las `calificaciones`.
2. **Ajuste de Patrón:** Si al menos el 50% de las calificaciones son >= 8, sumar el `factor_ajuste` al promedio.
3. **Clasificación:**
   - >= 9.0: "Obra Maestra".
   - 7.0 - 8.9: "Recomendada".
   - 5.0 - 6.9: "Culto".
   - < 5.0: "Regular".

## Pruebas

### Caso normal

**Entrada:**
```text
calificaciones: [9, 8, 7, 9]
factor_ajuste: 0.5