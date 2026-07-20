# Analisis del reto: Promedios y Medianas en Torneo de Esports

## Analisis

- **Entrada:** Un arreglo de `tiempos_partida` (duración en minutos de cada enfrentamiento), un `bono_rapidez` y una `penalizacion_pausa`.
- **Proceso:** Calcular el promedio y la mediana de los tiempos de partida, aplicar el bono por partidas rápidas (si el promedio es menor a un umbral) y restar la penalización por pausas técnicas.
- **Salida:** El `tiempo_final_ajustado` y la `clasificacion_ritmo` del torneo.

## Reglas identificadas

1. **Cálculo:** Obtener el promedio (suma total / n) y la mediana (valor central al ordenar).
2. **Aplicación de ajustes:** Si el promedio es < 20 min, aplicar `bono_rapidez`. Restar siempre `penalizacion_pausa` al tiempo final.
3. **Clasificación:**
   - Si tiempo_final < 15: "ritmo frenético".
   - Si tiempo_final entre 15 y 25: "estándar".
   - Si tiempo_final > 25: "partida lenta".

## Pruebas

### Caso normal

**Entrada:**
```text
tiempos_partida: [10, 20, 30]
bono_rapidez: 5
penalizacion_pausa: 2