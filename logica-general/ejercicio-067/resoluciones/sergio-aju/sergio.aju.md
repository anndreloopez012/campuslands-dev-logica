# Analisis del reto: Detección de Inconsistencias en Playlist Musical

## Analisis

- **Entrada:** Un arreglo de objetos `canciones` (nombre y duración en segundos) y un `umbral_duracion` (límite máximo permitido).
- **Proceso:** Identificar canciones cuya duración sea ilógica (negativa) o que excedan el `umbral_duracion` definido.
- **Salida:** Un objeto que contiene una `lista_inconsistencias` (nombres de canciones) y un mensaje de `estado` del inventario.

## Reglas identificadas

1. **Inconsistencia de formato:** Si la duración es menor o igual a 0, la canción es inválida.
2. **Inconsistencia de límite:** Si la duración es mayor al `umbral_duracion`, la canción se marca como error de exceso.
3. **Validación:** Si se detectan inconsistencias, deben ser listadas por nombre para su revisión.

## Pruebas

### Caso normal

**Entrada:**
```javascript
canciones: [{nombre: "Song A", duracion: 300}, {nombre: "Song B", duracion: 6000}],
umbral_duracion: 3600