# Analisis

- **Entrada:** `estadoActual` (string), `evento` (string).
- **Proceso:** Implementación de una máquina de estados donde el nuevo estado es el resultado de evaluar el estado actual frente a un evento específico.
- **Salida:** El nuevo `estado` (string).

## Reglas aplicadas

1. **Transición desde Calma:** Un ruido lleva a Alerta, un fantasma lleva a Pánico.
2. **Transición desde Alerta:** Un fantasma lleva a Pánico, silencio devuelve a Calma.
3. **Transición desde Pánico:** La presencia de luz permite bajar la intensidad a Alerta.

## Casos probados

### Caso normal
- **Entrada:** estado: "Calma", evento: "ruido"
- **Resultado:** "Alerta"

### Caso borde
- **Entrada:** estado: "Pánico", evento: "luz"
- **Resultado:** "Alerta"

## Explicacion final

A diferencia de los condicionales simples, esta estructura garantiza que el personaje solo pueda pasar de un estado a otro si existe una regla de transición definida, evitando cambios bruscos o imposibles.