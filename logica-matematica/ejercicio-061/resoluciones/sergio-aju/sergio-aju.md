# Analisis del reto: Operaciones Aritméticas Controladas en Videojuegos

## Analisis

- **Entrada:** Un arreglo de `puntos_partida` (logros obtenidos en rondas), un `multiplicador_racha` y una `penalizacion_desconexion`.
- **Proceso:** Sumar todos los puntos, aplicar el multiplicador de racha al total y restar la penalización por desconexión.
- **Salida:** El `puntaje_final` calculado y la `clasificacion_ranking` del jugador.

## Reglas identificadas

1. **Cálculo base:** Sumar todos los elementos del arreglo `puntos_partida`.
2. **Aplicación de ajustes:** Al total, multiplicar por el `multiplicador_racha` y restar la `penalizacion_desconexion`.
3. **Clasificación:**
   - Si el resultado es >= 500: "elité".
   - Si el resultado es entre 200 y 499: "profesional".
   - Si el resultado es < 200: "amateur".

## Pruebas

### Caso normal

**Entrada:**
```text
puntos_partida: [100, 150, 200]
multiplicador_racha: 1.5
penalizacion_desconexion: 50