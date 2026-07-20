# Analisis del reto: Validación de Datos en Ranking de Fútbol Sala

## Analisis

- **Entrada:** Un arreglo de objetos `jugadores` (con nombre, `edad` y `goles`) y un objeto `reglas_participacion` (edad mínima y goles mínimos).
- **Proceso:** Filtrar y validar qué jugadores cumplen con los requisitos mínimos de edad y goles para ingresar al ranking oficial.
- **Salida:** Un objeto con la lista de `jugadores_aptos` y un mensaje de `estado` general.

## Reglas identificadas

1. **Validación de Edad:** El jugador debe tener al menos la edad definida en `reglas_participacion`.
2. **Validación de Desempeño:** El jugador debe tener al menos la cantidad de goles definida en `reglas_participacion`.
3. **Formato:** Si no cumplen ambos criterios, el jugador es excluido del ranking.

## Pruebas

### Caso normal

**Entrada:**
```javascript
jugadores: [{nombre: "Juan", edad: 20, goles: 5}, {nombre: "Ana", edad: 16, goles: 10}],
reglas: {edad_minima: 18, goles_minimos: 3}