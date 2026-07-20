# Analisis del reto: Mínimos y Límites en Taller Mecánico

## Analisis

- **Entrada:** Un arreglo de `tiempos_reparacion` (en horas), un `tiempo_minimo_garantizado` y un `limite_maximo_entrega`.
- **Proceso:** Validar que cada reparación cumpla con los estándares operativos, calculando el tiempo promedio y detectando valores fuera de los límites establecidos.
- **Salida:** Un objeto con el `promedio_ajustado`, el `estado_cumplimiento` (apto/retrasado) y las `incidencias` detectadas.

## Reglas identificadas

1. **Cálculo:** Calcular el promedio de tiempos de reparación.
2. **Validación de Límites:** Si algún tiempo es mayor al `limite_maximo_entrega`, marcarlo como incidencia.
3. **Cumplimiento:** Si el promedio es >= `tiempo_minimo_garantizado` y no hay reparaciones que excedan el límite máximo, el estado es "apto".

## Pruebas

### Caso normal

**Entrada:**
```text
tiempos_reparacion: [2, 3, 4]
tiempo_minimo_garantizado: 2
limite_maximo_entrega: 5