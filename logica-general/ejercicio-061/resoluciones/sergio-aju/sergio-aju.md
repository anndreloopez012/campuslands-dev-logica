# Analisis del reto: Clasificación por Reglas en Videojuegos Competitivos

## Analisis

- **Entrada:** Un arreglo de objetos `jugadores` (nombre y su tasa de victorias 'win_rate' en porcentaje) y un `rango_actual` (bronce, plata, oro).
- **Proceso:** Evaluar si el jugador cumple con las condiciones de ascenso o descenso basándose en su tasa de victorias y rango actual.
- **Salida:** Un objeto con la `accion` (ascender, mantener, descender) y el `motivo` de la decisión.

## Reglas identificadas

1. **Ascenso:** Si el jugador tiene > 70% win_rate, asciende de rango.
2. **Descenso:** Si el jugador tiene < 30% win_rate, desciende de rango (si no es bronce).
3. **Mantenimiento:** Si el win_rate está entre 30% y 70%, el rango se mantiene.

## Pruebas

### Caso normal

**Entrada:**
```javascript
jugadores: [{nombre: "Player1", win_rate: 75}],
rango_actual: "plata"