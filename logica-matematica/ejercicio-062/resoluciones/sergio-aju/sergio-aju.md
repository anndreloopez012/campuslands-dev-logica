# Analisis del reto: Porcentajes y Proporciones - Fútbol Sala

## Analisis

- **Entrada:** Un arreglo de `goles_anotados` por partido, el `total_partidos` jugados y un `bono_eficiencia` (valor extra si el promedio supera cierto umbral).
- **Proceso:** Calcular el promedio de goles por partido, aplicar un ajuste de eficiencia y categorizar al jugador según su rendimiento.
- **Salida:** El `promedio_final` y la `clasificacion_ranking` del jugador.

## Reglas identificadas

1. **Cálculo base:** Obtener el promedio dividiendo la suma de `goles_anotados` entre el `total_partidos`.
2. **Aplicación de ajustes:** Si el promedio es superior a 2.0, sumar el `bono_eficiencia`.
3. **Clasificación:**
   - Si el resultado es >= 3.0: "goleador estrella".
   - Si el resultado es entre 1.5 y 2.9: "delantero regular".
   - Si el resultado es < 1.5: "en desarrollo".

## Pruebas

### Caso normal

**Entrada:**
```text
goles_anotados: [2, 3, 4]
total_partidos: 3
bono_eficiencia: 0.5